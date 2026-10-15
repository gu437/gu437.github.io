# CTF 零基础入门 ·「文档型」资源阅读指南

> 本文回答的是：**不想先泡在刷题平台里，想先靠「读文档」把 CTF 搞明白，该读什么、按什么顺序读、读多久。**
> 调研日期：2026-10-15　　配套文件：`结论.md`（平台型资源）、`数据/平台对比.md`

---

## 0. 一句话结论

**主读 [Hello CTF](https://hello-ctf.com/hc-start/)（免费开源、专为 0 基础写、2026-10-15 还在更新），
当字典查 [CTF Wiki](https://ctf-wiki.org/)，
[CTF-All-In-One](https://firmianay.gitbook.io/ctf-all-in-one/) 已停更两年、只当 PWN 方向补充。**

读的顺序不是从第一页读到最后一页，而是：**快速开始 → 挑一个方向（Web 或 MISC）→ 只读那个方向的「环境与工具 + 入门题单」→ 立刻去做题 → 做完回来读对应知识点章节。**

---

## 1. 主读：Hello CTF

| 项 | 内容 |
|---|---|
| 在线读 | https://hello-ctf.com/hc-start/ |
| 源码/离线 | https://github.com/ProbiusOfficial/Hello-CTF |
| 作者 | 探姬（ProbiusOfficial） |
| 许可 | GPL-3.0，免费开源 |
| 热度 | ⭐ 4257 star / 264 fork（截至 2026-10-15） |
| 活跃度 | **最后提交 2026-10-15（当天）**；10 月还在合并 PR（如修正 SSTI 示例、新增 TGScope 工具、MD5 碰撞论文链接） |
| 自述 | 「开源免费、新手友好的 CTF 入门教程」「针对 0 基础新手编写，同时兼顾信息差的填补」 |

### 全书目录（取自仓库 mkdocs.yml，即站点的左侧导航）

```
快速开始  hc-start/
前言      关于本书 / 食用方法 / 加入我们

MISC | 杂项
  ├ 信息收集(OSINT)
  ├ 文件与编码基础：编码扩展 / 文件基础 / 压缩包
  ├ 隐写分析：图片隐写 / 文件隐写 / 音频隐写
  ├ 取证分析：流量分析 / 内存取证 / 工控类
  └ 附：文件签名表

Web | 网络攻防
  ├ 环境与工具：Web环境设置 / Docker安装配置 / Docker与漏洞环境 / 虚拟机与网络模拟 /
  │            Burp Suite / Python脚本 / HTTP协议
  ├ Web入门题单          ← 直接给题单，读完就能开刷
  ├ 信息收集：敏感信息泄露
  ├ PHP专题：PHP基础 / PHP特性与常见绕过 / PHP反序列化 / PHP代码审计
  ├ 注入类漏洞：SQL注入 / NoSQL注入 / XSS / CSRF / SSTI / XXE / SSRF
  ├ 文件类漏洞：文件上传 / 文件包含 / 目录穿越 / 任意文件读取
  ├ 命令与代码执行：RCE
  ├ 会话与认证安全（Session/JWT）
  ├ 逻辑漏洞
  ├ 语言扩展：Python反序列化 / Python沙箱逃逸 / Flask安全 / 原型链污染 /
  │           JS沙箱逃逸 / JS逆向 / Java安全基础 / Java反序列化 / Spring漏洞 / Java代码审计
  └ 进阶专题：WAF绕过 / 请求走私 / 缓存投毒 / XS-Leaks / 密码学应用题 / 云与容器安全
     实战能力：渗透链路基础 → 多层网络渗透 → 对抗与综合(AWD/Web与二进制结合/Nday/Writeup复盘)

Crypto | 密码学   环境配置 / 前情提要 / 编码基础 / 古典密码 / 现代密码
Reverse | 逆向工程  灵魂FAQ / C语言基础 / 存储结构 / 可执行文件 / 从零开始的IDA / IDA动态调试 /
                   基本运算 / 编码基础 / 字节流算法 / 分组密码 / z3约束求解 / x86汇编初步 /
                   代码保护与对抗(花指令/加壳/VM/SMC/反调试/控制流平坦化…) / 符号执行 /
                   语言与框架(Python/.NET/Rust/JS) / Android / 解题技巧
Pwn | 二进制安全  wsl2环境配置 / 汇编(x86) / 常见保护 / 栈溢出 / ROP入门 / 常见ROP技巧 / ROP进阶
AWD | 攻防模式   AWD介绍 / AWD平台 / WEB技巧 / PWN技巧
AI | 人工智能安全  初识AI / 你的第一个神经网络
blockchain | 区块链安全  Move 语言系列
附录  提问的智慧 / NSSCTF平台使用 / 推荐书单
```

### 零基础推荐阅读顺序（约 1 周，每天 1~2 小时）

| 顺序 | 读什么 | 为什么 / 读完能干什么 | 建议时长 |
|---|---|---|---|
| 1 | `快速开始`（hc-start） | CTF 是什么、Flag、赛制、五大方向怎么选、要什么基础。**这一篇是全站最重要的一篇** | 1 小时 |
| 2 | `前言 / 食用方法` | 知道这份文档自己该怎么用（哪些是必读、哪些是查阅型） | 15 分钟 |
| 3 | 选方向：`Web` 或 `MISC` 的 `index` | 决定先啃哪个。零基础一般选 **Web**（不需系统底层知识）或 **MISC**（趣味强、熟悉节奏） | 30 分钟 |
| 4 | `Web → 环境与工具 → HTTP协议`（或 `MISC → 文件与编码基础`） | 唯一必须先补的基础课。Web 只需看懂网页 + 会用 F12 | 1.5 小时 |
| 5 | `Web → Web入门题单` | **从这里开始离开纯阅读**，按题单去刷题 | 30 分钟 |
| 6 | 刷题中遇到什么回读什么 | 如 `敏感信息泄露`、`文件上传`、`SQL注入` 章节，边做边查 | 持续 |
| 7 | `附录 → 提问的智慧` | 决定你能不能在社区里问出好问题（很实际） | 20 分钟 |
| 8 | `附录 → 推荐书单` | 需要系统补课/买书时再来看 | 备用 |

**反例（别这么干）**：从 `Pwn` 或 `Reverse` 开始逐页读。这两个方向前置知识多（汇编、C、Linux），零基础直接读会读不懂也没题可做，是弃坑率最高的路径。

### 站点另外附赠的东西

- **各方向现成题单**（写在 `hc-start` 里，不用自己找题）：
  MISC → CTFshow 菜狗杯 MISC、CTFshow MISC 入门、BUUCTF MISC；
  Web → CTFshow 菜狗杯 Web、CTFshow Web 入门、NSSCTF Web；
  RE → NSSCTF HNCTF2022；Pwn → pwn.college、pwnable.tw。
- **工具表**（每个方向一节）：MISC 的 CyberChef / 010 Editor / Stegsolve / Wireshark；Web 的 HackBar / Burp Suite / Wappalyzer / dirsearch / SQLMap；RE 的 IDA / x64dbg / GDB；Pwn 的 pwntools 等。
- **赛事日历**：站点首页有国内外 CTF 赛程（数据每天从 CTFtime 同步），可以挑一个"新生赛"打第一场。
- **配套靶场**（另一个 GitHub 作者的项目，同属"文档+靶场"型）：RCE-labs、PHPSerialize-labs、PHPinclude-labs、n3tfl0w-labs（流量分析）、hello-ssrf —— 每个都是一套**带讲解的专项练习**，比裸刷题更适合零基础。

---

## 2. 当字典用：CTF Wiki

| 项 | 内容 |
|---|---|
| 在线读 | https://ctf-wiki.org/ |
| 源码 | https://github.com/ctf-wiki/ctf-wiki （⭐ 9704 / 1439 fork） |
| 活跃度 | 最后提交 2026-08-23；2026 年 7 月还在重构 AI 章节、修 Pwn/密码学内容 |
| 性质 | **社区维护的知识库，不提供学习路线** |

- 官方自述定位：*「网上资料大都零散琐碎，初学者往往并不知道该如何系统性地学习 CTF 相关领域知识……CTF Wiki 对各个方向的知识和技术进行介绍，以便于初学者更好地学习」*；并声明**永远不会商业化、永远不会出版书籍**。
- 覆盖方向：Misc / Crypto / Web / Reverse / Pwn / 区块链 / 移动安全 / AI 等。
- **正确用法**：*不要*从它的目录开始读。它的正确角色是「写题卡住时查某个知识点」——比如报了 `SQL注入` 的题，去查它的 SQL 注入词条把原理补齐，而不是通读。
- **和 Hello CTF 的分工**：Hello CTF 负责"带你走"，CTF Wiki 负责"查得到"。

---

## 3. 补充读物

| 资源 | 地址 | 状态 | 怎么用 |
|---|---|---|---|
| CTF-All-In-One《CTF 竞赛入门指南》 | https://firmianay.gitbook.io/ctf-all-in-one/ ／ [GitHub](https://github.com/firmianay/CTF-All-In-One) | ⭐ 4510，**最后提交 2024-07-27（停更两年）** | 内容以 Linux 二进制/PWN 为主、讲解细；当作 PWN 方向的深入读物，别当入门主线 |
| HackerMind 安全思维导图 | https://github.com/Ascotbe/HackerMind | ⭐ 高，最后更新 2023-12 | 一堆安全方向思维导图（含 CTF 资料、MISC、Web 漏洞脑图）；想先看"全貌地图"可以翻，但内容偏渗透测试 |
| Hello CTF 推荐书单（纸质书） | https://hello-ctf.com/hc-appendix/book/ | 2026 仍在维护 | 综合类：《从0到1：CTFer成长之路》Nu1L、《CTF特训营》FlappyPig、《CTF实战：从入门到提升》恒星实验室、《CTF那些事儿》北航 Lancet、《CTF实战 技术 解题与进阶》ChaMd5；Web：《白帽子讲Web安全(第2版)》《Web漏洞解析与攻防实战》；Crypto：《深入浅出密码学》《高三数学选修4-6 初等数论初步》；Pwn：《CTF竞赛权威指南（Pwn篇）》杨超 |

---

## 4. 只读文档的两个坑（提前说）

1. **只读不练 = 没学会。** CTF 是手上功夫，文档的作用是"让你知道该练什么"。Hello CTF 自己在 `hc-start` 里就写了：入门要求只有两条——**信息检索能力**和**学习能力**，说人话就是"会搜、会看懂别人的 WriteUp、会跟着复现"。所以读完第 5 步就去刷题，不要想着"读完整本书再开始"。
2. **不要按目录顺序通读。** 这两份文档都是**网状参考书**，不是线性教材。正确姿势：读「快速开始 + 一个方向的环境/HTTP 基础 + 入门题单」这三块（不到 4 小时），然后**以题驱动阅读**。

---

## 5. 最小可执行清单（照抄即可）

```
今天：     读 hello-ctf.com/hc-start/ 全篇（1h）
           → 决定先学 Web 还是 MISC（建议 Web）
明天：     读 Web 方向「环境与工具 → HTTP协议」+ 装好浏览器 F12 / HackBar（1.5h）
第三天：   打开「Web入门题单」，去 CTFHub 技能树 或 青少年CTF 开始做第一题
此后：     做一题 → 卡住 → 回 Hello CTF 读对应章节 / 查 CTF Wiki → 再做一遍
每周一次： 回看 Hello CTF 首页「赛事日历」，挑一场新生赛报名（以赛代练）
```

---

## 证据

| 证据 | 来源 |
|---|---|
| Hello CTF 全书目录（本文第 1 节目录树） | 仓库 `mkdocs.yml` 的 `nav:` 段，`gh api repos/ProbiusOfficial/Hello-CTF/contents/mkdocs.yml` |
| Hello CTF 推荐书单（原文摘录） | 仓库 `docs/hc-appendix/book.md` |
| Hello CTF 活跃度（⭐4257，最后提交 2026-10-15） | `repo_summary.py ProbiusOfficial/Hello-CTF` |
| CTF Wiki 活跃度（⭐9704，最后提交 2026-08-23） | `repo_summary.py ctf-wiki/ctf-wiki` |
| CTF-All-In-One 停更（⭐4510，最后提交 2024-07-27） | `repo_summary.py firmianay/CTF-All-In-One` |
| CTF Wiki 自我定位原文 | https://ctf-wiki.org/ 简介页 |
| 新手必读的两条能力要求 | https://hello-ctf.com/hc-start/ 「Q：学习 CTF 有什么要求么？」 |

**复现方式**（需要 gh 不在 PATH 时用全路径）：

```powershell
$env:PATH="C:\Users\87209\.dsh\tools\gh\bin;$env:PATH"; $env:PYTHONUTF8="1"
$s="C:\Users\87209\.dsh\profiles\web\node_modules\github-explore\skills\github-explore\scripts"
python "$s\repo_summary.py" ProbiusOfficial/Hello-CTF --format markdown
gh api -H "Accept: application/vnd.github.raw" repos/ProbiusOfficial/Hello-CTF/contents/mkdocs.yml
```
