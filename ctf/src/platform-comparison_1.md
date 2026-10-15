# 平台对比明细（原文摘录 + 实测记录）

调研日期：2026-10-15　工具：web_search / read_page / ego 浏览器（真实 Chrome，实测可点）

---

## 1. CTFHub ★首选

- 首页 meta 描述：**「CTFHub 专注网络安全、信息安全、白帽子技术的在线学习，实训平台。提供优质的赛事及学习服务，拥有完善的题目环境及配套 writeup，降低 CTF 学习入门门槛」**
- 站点自述：「开箱即用的 CTF 学习解决方案」
- 导航栏目：首页 / 赛事中心 / **技能树** / 历年真题 / 工具 / 排行榜 / WriteUp
- 官方 WriteUp 站：https://writeup.ctfhub.com/ ，其分类页给出「Skill」大类下 Web 方向的节点：

```
Skill (48)
├─ Web (38)
│   ├─ RCE 9
│   ├─ SQL注入 4
│   ├─ Web前置技能 5 → HTTP协议 5
│   ├─ XSS 1
│   ├─ 信息泄露 10 → Git泄露 2 / 备份文件下载 4
│   ├─ 密码口令 2
│   └─ 文件上传 7
├─ Web进阶 3 → JSON Web Token …
└─ Pwn 1 → 栈溢出 1
```

- 实测：`https://www.ctfhub.com/#/skilltree` **未登录会自动跳转到 `#/user/login`**（截图：`证据_CTFHub技能树跳转登录.png`）。登录页提供：账号密码 / 验证码登录、注册账户、微信扫码、GitHub OAuth。页面上**没有**「游客登录」按钮，必须注册。
- 费用：免费注册；平台有金币/积分机制（早期题解提到「做题需要积分，通过基础知识、签到、彩蛋部分可以快速获取积分」）。**未实际注册账号验证付费墙。**
- 第三方评价（Hello CTF 官方教程原文）：CTFhub **「技能树确实不错，但是更新慢」**。

## 2. Hello CTF ★教材（不是刷题平台）

- https://hello-ctf.com/hc-start/
- 首页自述：**「开源、免费、新手友好的 CTF 夺旗赛入门教程。从环境搭建到打进第一场比赛，每一步都有题可练。」**「针对 0 基础新手编写」
- 内容：什么是 CTF / Flag / WriteUp、赛制（Jeopardy、AWD、AWDP）、五大方向（MISC/Crypto/Web/Reverse/Pwn）各自的前置知识、工具表、入门路线、**题单**
- 它给的新手题单原文摘要：
  - MISC：CTFshow 菜狗杯 MISC 部分、CTFshow MISC 入门、BUUCTF MISC
  - Web：CTFshow 菜狗杯 Web、CTFshow Web 入门、NSSCTF Web（前期结合 WP 和 tag 刷）
  - RE：NSSCTF 的 HNCTF2022
  - PWN：pwn.college、pwnable.tw、NSSCTF HNCTF2022
- 活跃度实测：站点 Git Log 显示 GitHub commits 到 **2026-10-14**（chore(events): update CTFtime data），赛事日历更新到 2026-10。
- 站内「PRACTICE · 靶场」列表：循镜靶场、NSSCTF、**CTFshow（标注「新手友好的刷题平台」）**、CTF2（原 BUU，标注「经典题库，Writeup 丰富」）、CTFHub（标注「技能树式闯关学习」）。

## 3. CTFshow（收费，需谨慎）

- 首页：「CTFshow —— 萌新入门的好地方」「拥有 1500+ 的原创题目」
- 官方 VIP 页（https://vip.ctf.show/）原文：
  - 「VIP 会员目前针对平台 **WEB 入门** 系列题目，开通 VIP 会员后，可以解锁**全部 1000 道**题目，必要时，可以提供 WP 和远程技术协助」
  - 价格：「全程 599.9 元，平均单价 0.6 元」；「可单独购买题目包，每个题目包 100 题，99 元」；「解锁 1-100 ……… 99 元」
  - 题栈（有价值的新手路线参考，即便不买也能照这个顺序学）：
    `1-20 信息收集｜21-28 爆破｜29-77 命令执行｜78-88 文件包含｜89-150 php特性｜151-170 文件上传｜171-253 sql注入｜254-278 php序列化｜279-300 java｜301-310 代码审计｜311-315 phpCVE｜316-333 xss｜334-344 nodejs｜345-350 jwt｜351-360 ssrf｜361-372 ssti｜372-400 xxe｜400-500 其他｜501-600 大综合｜601-700 框架反序列化/内网渗透`
- 另有第三方博客（2025）标题为「ctfshow~VIP 限免题目 20 道(保姆级解析)」，佐证免费部分很有限。
- 实测：`https://ctf.show/challenges` 未登录跳转 `/login`。

## 4. 青少年 CTF（全公益）

- https://www.qsnctf.com/ 自述：「青少年CTF 是一个专门为青少年网络安全爱好者打造，提供在线 CTF 比赛、题库练习和网络安全技能训练的全公益平台」
- 首页数据：比赛场次 80+、注册用户 22000+、使用院校 40+
- 题量：题目总数 —— Web安全 50+、密码学 30+、逆向工程 40+
- 注册说明原文：「注册即可获得**新手礼包和基础题目的访问权限**」
- 有三步引导：注册账号 → 组建战队 → 参与比赛

## 5. NSSCTF

- https://www.nssctf.cn/
- 首页可见「工坊」（系统化专题学习）：
  - Crypto系列——RSA（二）：12 道 RSA 题，讲各类攻击原理
  - RE系列——Cheat Engine：5 题，「适合新手小白学习，包教包会」
  - RE系列—逆向综合基础：从程序编译过程、汇编原理到 IDA 使用
  - PWN系列——二进制综合基础：函数调用与基础 PWN 漏洞原理
- 题库大量收录国内高校新生赛真题（SWPUCTF 2021/2025 新生赛、NCTF 2018、HNCTF 2022 等），新生赛是对新手最友好的题型。
- 有 AI 专区 / Agent Arena、每日一题、交流板块、比赛中心。
- 注意：站内社区帖可见「下载不了附件」「讨金币做工坊」等反馈，说明**部分工坊需金币**，且附件下载偶有问题。

## 6. 攻防世界（★避坑：新手练习区已下线）

实测记录：

| URL | 结果 |
|---|---|
| `https://adworld.xctf.org.cn/task?type=web&grade=0` | **404**「抱歉，你访问的页面不存在」（截图：`证据_攻防世界新手练习区404.png`） |
| `https://adworld.xctf.org.cn/challenges/list?rwNmOdr=…` | **404**（同一 404 模板） |
| 站内导航「实训基地」 | → `https://adworld.xctf.org.cn/all-course`，内容是 **AI实训 / 网安实训** 课程页（截图：`证据_攻防世界改版为实训课程.png`） |
| 「历年真题」 | 收录 9th-RCTF-2025、9th-ACTF-2025、9th-SUCTF-2025 等（标「Limited Free」），也有收费的：2024 河南天安杯 ¥65、2024 熊猫杯-半决赛 ¥338、2024 熊猫杯-决赛 ¥260、2024 强网拟态决赛 ¥510 |
| 首页板块 | 赛事日历、赛事大厅、XCTF 专栏、社区、XCTF 人才认证、百城千赛 |

- 改版后的「网安实训」知识体系（截图可见）：信息科学技术基础领域（Python程序设计、C语言程序设计、Mysql基础入门、Linux基础入门、网络配置与管理）、密码学知识领域（密码学概念、公钥密码、分组密码、流密码、哈希函数）、网络安全知识领域（网络安全概念、网络攻防技术与实践、二进制漏洞挖掘与利用、网络安全防护）……
- 四大系列：网络安全意识提升系列 / 教指委网络空间安全系列 / 网络安全岗位实战系列 / **网络安全竞赛提升系列（专注 CTF 等赛事训练）**
- **结论：现在的攻防世界是「课程 + 认证 + 赛事 + 真题商城」，不是零基础免费刷题场。网上的老攻略（"先去攻防世界刷新手区"）已过期。**

## 7. 其它被提到但不推荐首选

- CTF2（原 BUUCTF）https://ctf2.dasctf.com/ ：题库大、WP 多，但难度跳跃、无梯度
- CTF Wiki https://ctf-wiki.org/ ：知识库/字典，不是刷题平台
- 循镜靶场 https://platform.cyclens.tech/ ：较新的综合练习平台，资料少
- Bugku https://ctf.bugku.com/ ：AWD 做得比较好（Hello CTF 语）
- pwn.college ：想直接学 PWN 才用
- i春秋：以课程/训练营为主（星盟团队 CTF 入门到提高等），偏付费课程

---

## 复现方式

本轮结论全部来自上述公开页面，无本地脚本。
若需复核：

```powershell
# 攻防世界新手区是否仍在（预期 404）
# 浏览器打开： https://adworld.xctf.org.cn/task?type=web&grade=0

# CTFHub 技能树是否仍需登录（预期跳 #/user/login）
# 浏览器打开： https://www.ctfhub.com/#/skilltree

# CTFHub 技能树结构（免登录可读）
# 浏览器打开： https://writeup.ctfhub.com/categories/
```
