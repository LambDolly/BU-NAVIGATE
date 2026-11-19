# BU NAVIGATE

A navigation start page built for Boston University students. It brings
search and the BU services students use every day into one page, so there
is no need to dig through bookmarks.

## Features

- **Multi-engine search** — switch between Google, Baidu and Yahoo from
  the dropdown next to the search box; the search form retargets itself
  to the engine you pick
- **Fast Arrive** — one-click links to Blackboard (Learn BU), SONA and
  the MyBU Student Dashboard
- **Link sections** — shortcuts grouped under *Fast Arrive*,
  *Academic tool* and *Life service* (the last two are being expanded)
- **Responsive navbar** — collapses to a hamburger menu on mobile

## Tech

Plain HTML, CSS and JavaScript — no framework, no build step.
Custom display fonts are loaded through `fonts.css`.

## Run it

Open `index.html` in a browser, or serve the folder with any static
server, e.g.:

    npx serve .

## Structure

    index.html    page markup
    styles.css    main styles
    fonts.css     font definitions
    script.js     mobile menu + search-engine switcher
    images/       logos and icons
    front/        font files

## Author

LambDolly (HongYang Zhao), Boston University

---

## 中文介绍

为波士顿大学（Boston University）学生做的导航起始页：把搜索和学生
每天要用的 BU 服务集中到一个页面里，不用再翻浏览器收藏夹。

### 功能

- **多搜索引擎切换**——在搜索框旁的下拉菜单里切换 Google、百度、
  Yahoo，搜索表单会自动指向所选的搜索引擎
- **快速到达（Fast Arrive）**——一键直达 Blackboard（Learn BU）、
  SONA 和 MyBU 学生门户（Dashboard）
- **链接分区**——快捷入口按 *Fast Arrive*（快速到达）、
  *Academic tool*（学术工具）、*Life service*（生活服务）分组，
  后两个分区还在扩充
- **响应式导航栏**——在手机上自动折叠成汉堡菜单

### 技术

原生 HTML、CSS、JavaScript，无框架、无构建步骤；
展示字体通过 `fonts.css` 加载。

### 运行

用浏览器打开 `index.html`，或用任意静态服务器托管本文件夹，例如：

    npx serve .
