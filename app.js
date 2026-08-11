/* ===== 每日学习站 · 前端逻辑 =====
   交互借鉴 imsyy/DailyHot：分类 tab + 卡片流
   数据：data/latest.json（每日更新） + data/archive/{date}.json（历史）
   架构：纯原生 JS，无框架无构建 */

// 分类配置（顺序即 tab 顺序；emoji 用于 tab 图标）
const CATEGORIES = [
  { id: "today",    label: "今日",      emoji: "⭐" },
  { id: "network",  label: "计算机网络", emoji: "🌐" },
  { id: "linux",    label: "Linux",     emoji: "🐧" },
  { id: "python",   label: "Python",    emoji: "🐍" },
  { id: "websec",   label: "Web安全",    emoji: "🕸️" },
  { id: "vuln",     label: "漏洞情报",   emoji: "🩹" },
  { id: "intranet", label: "内网渗透",   emoji: "🕳️" },
  { id: "ctf",      label: "CTF/靶场",   emoji: "🏴" },
  { id: "tools",    label: "工具",      emoji: "🧰" },
  { id: "thinking", label: "思考",      emoji: "💭" },
];

// 默认分类顺序映射（JSON 里没有的分类显示空态）
const state = {
  data: null,
  activeTab: "today",
  archives: [],
};

// ===== DOM 工具 =====
const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

// ===== 时间格式化 =====
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const week = ["日","一","二","三","四","五","六"];
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")} 周${week[d.getDay()]}`;
}

function formatTime(ts) {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d)) return "";
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}

// ===== 数据加载 =====
async function fetchData() {
  // 支持 ?date=YYYY-MM-DD 查看归档；默认 latest.json
  const params = new URLSearchParams(window.location.search);
  const dateParam = params.get("date");
  const url = dateParam ? `data/archive/${dateParam}.json` : "data/latest.json";
  try {
    const resp = await fetch(url, { cache: "no-store" });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    // 兼容两种结构：{date, categories:{...}} 或 {date, categories:[...]}
    return normalizeData(data);
  } catch (e) {
    console.error("加载数据失败:", e);
    return null;
  }
}

function normalizeData(raw) {
  const data = { date: raw.date, categories: {}, updateTime: raw.updateTime || null };
  const cats = raw.categories;
  if (Array.isArray(cats)) {
    for (const c of cats) data.categories[c.id] = c.items || [];
  } else if (cats && typeof cats === "object") {
    for (const key of Object.keys(cats)) {
      data.categories[key] = Array.isArray(cats[key]) ? cats[key] : [];
    }
  }
  return data;
}

// ===== 归档加载 =====
async function loadArchives() {
  try {
    const resp = await fetch("data/archive/index.json", { cache: "no-store" });
    if (!resp.ok) throw new Error();
    const data = await resp.json();
    state.archives = Array.isArray(data) ? data : (data.dates || []);
  } catch (e) {
    state.archives = [];
  }
  renderArchives();
}

// ===== Tab 渲染 =====
function renderTabs() {
  const wrap = $("#tabs-scroll");
  wrap.innerHTML = "";
  for (const cat of CATEGORIES) {
    const btn = el("button", "tab" + (cat.id === state.activeTab ? " active" : ""));
    btn.dataset.id = cat.id;
    btn.innerHTML = `<span class="tab-emoji">${cat.emoji}</span>${cat.label}`;
    btn.addEventListener("click", () => switchTab(cat.id));
    wrap.appendChild(btn);
  }
  // 当前 tab 滚动到可见
  requestAnimationFrame(() => {
    const active = wrap.querySelector(".tab.active");
    if (active) active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
}

function switchTab(id) {
  state.activeTab = id;
  // 更新 tab 高亮
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.id === id);
  });
  renderContent();
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== 内容渲染 =====
function renderContent() {
  const main = $("#content");
  const cat = CATEGORIES.find((c) => c.id === state.activeTab) || CATEGORIES[0];
  const items = state.data?.categories?.[cat.id] || [];

  main.innerHTML = "";

  // 分类标题
  const head = el("div", "category-head");
  head.appendChild(el("h2", null, `${cat.emoji} ${cat.label}`));
  const count = el("span", "cat-count");
  count.textContent = items.length ? `${items.length} 条` : "";
  head.appendChild(count);
  main.appendChild(head);

  // 列表
  const list = el("div", "card-list");
  if (!state.data) {
    // 数据未加载：骨架屏
    for (let i = 0; i < 3; i++) list.appendChild(el("div", "skeleton"));
  } else if (items.length === 0) {
    const empty = el("div", "empty");
    empty.appendChild(el("div", "empty-icon", "📭"));
    empty.appendChild(el("p", null, "这个分类今天还没有内容"));
    empty.appendChild(el("p", null, "宁缺毋滥，明天再看"));
    list.appendChild(empty);
  } else {
    items.forEach((item, i) => list.appendChild(renderCard(item, i)));
  }
  main.appendChild(list);
}

function renderCard(item, index) {
  const card = el("div", "item-card");
  card.dataset.url = item.url || "";
  card.dataset.mobileUrl = item.mobileUrl || "";

  // 顶部：序号 + 标题
  const top = el("div", "item-top");
  const rank = el("div", "rank" + (index === 0 ? " r1" : index === 1 ? " r2" : index === 2 ? " r3" : ""));
  rank.textContent = index + 1;
  top.appendChild(rank);

  const body = el("div", "item-body");
  const title = el("div", "item-title", item.title || "无标题");
  body.appendChild(title);

  // 摘要
  if (item.summary) {
    body.appendChild(el("div", "item-summary", item.summary));
  }

  // 为什么选它（学习体系核心：每条内容要能归位）
  if (item.reason) {
    body.appendChild(el("div", "item-reason", item.reason));
  }

  // 标签
  if (item.tags && item.tags.length) {
    const tags = el("div", "item-tags");
    for (const t of item.tags.slice(0, 4)) tags.appendChild(el("span", "tag", t));
    body.appendChild(tags);
  }

  top.appendChild(body);
  card.appendChild(top);

  // 点击跳转（移动端优先：手机用 mobileUrl，桌面用 url）
  card.addEventListener("click", () => {
    const url = window.innerWidth <= 680
      ? (card.dataset.mobileUrl || card.dataset.url)
      : (card.dataset.url || card.dataset.mobileUrl);
    if (url) window.open(url, "_blank", "noopener");
  });

  return card;
}

// ===== 归档渲染 =====
function renderArchives() {
  const wrap = $("#archive-links");
  wrap.innerHTML = "";
  if (!state.archives.length) return;
  const recent = state.archives.slice(-8).reverse();
  const label = el("span", null, "历史：");
  wrap.appendChild(label);
  for (const d of recent) {
    const a = el("a", "archive-link", d);
    a.href = `?date=${d}`;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      state.data = null;
      renderContent();
      fetchData().then((data) => {
        state.data = data;
        if (data) {
          const dateText = formatDate(data.date);
          const timeText = data.updateTime ? ` · 更新 ${formatTime(data.updateTime)}` : "";
          $("#header-date").textContent = dateText + timeText;
        }
        renderContent();
        window.scrollTo({ top: 0 });
      });
    });
    wrap.appendChild(a);
  }
}

// ===== 刷新 =====
function setupRefresh() {
  const btn = $("#refresh-btn");
  btn.addEventListener("click", async () => {
    btn.classList.add("spinning");
    state.data = await fetchData();
    if (state.data) {
      $("#header-date").textContent = formatDate(state.data.date);
    }
    renderContent();
    setTimeout(() => btn.classList.remove("spinning"), 600);
  });
}

// ===== 初始化 =====
async function init() {
  renderTabs();
  setupRefresh();

  // 显示骨架
  renderContent();

  state.data = await fetchData();
  if (state.data) {
    const dateText = formatDate(state.data.date);
    const timeText = state.data.updateTime ? ` · 更新 ${formatTime(state.data.updateTime)}` : "";
    $("#header-date").textContent = dateText + timeText;
  } else {
    $("#header-date").textContent = "数据加载失败";
    const main = $("#content");
    const err = el("div", "error-box");
    err.appendChild(el("p", null, "😵 内容加载失败"));
    err.appendChild(el("p", null, "可能是网络问题，或数据尚未生成"));
    const retry = el("button", "retry-btn", "重试");
    retry.addEventListener("click", init);
    err.appendChild(retry);
    main.innerHTML = "";
    main.appendChild(err);
  }
  renderContent();
  loadArchives();
}

init();
