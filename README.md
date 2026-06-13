<p align="right">
  <a href="#english">English</a> | <a href="#汉语">汉语</a>
</p>

---

# Postoperative Elderly Meal Planner

<a id="english"></a>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

---

### Overview

A single-page web application designed for postoperative elderly patients. It displays daily meal recipes with a "Today's Reminders" section for medication, exercise, and appointment notifications.

Built for a **31.5" 1080p display at 175% scaling** (Windows), the layout is optimized to minimize vertical scrolling while keeping fonts readable for elderly users.

### Features

- **Daily Recipe Rotation** — automatically picks a staple food and a dish based on the day of the year
- **Swap Button** — randomly select an alternative recipe if the current one doesn't appeal
- **Today's Reminders** — color-coded cards for medication, exercise, meals, and appointments
- **Elderly-Friendly UI** — large fonts, high contrast, SVG icons, minimal cognitive load
- **Single File** — no build tools, no dependencies, just one `dish.html`
- **Responsive** — works on desktop, tablet, and mobile

### Demo

GitHub Pages: `https://<username>.github.io/<repo>/dish.html`

### Tech Stack

| Layer     | Choice                                     |
| --------- | ------------------------------------------ |
| Structure | Semantic HTML5                             |
| Styling   | Vanilla CSS (CSS Variables, Flexbox, Grid) |
| Logic     | Vanilla JavaScript (ES5-compatible)        |
| Icons     | Inline SVG (Lucide-style)                  |
| Font      | Noto Sans SC (Google Fonts)                |

### Deployment

**Nginx:**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/directory;
        index dish.html;
    }
}
```

**GitHub Pages:**

1. Push to `main` branch
2. Go to repo Settings → Pages → Source: Deploy from branch
3. Set folder to `/ (root)` or the directory containing `dish.html`
4. Access at `https://<username>.github.io/<repo>/dish.html`

**Any static host** — just upload `dish.html`.

### Project Structure

```
postoperative/
├── dish.html                  # Main application (single file)
├── 老人饮食参考清单.docx       # Dietary reference document
├── README.md
└── .gitignore
```

### License

MIT

---

<p align="right">
  <a href="#english">English</a> | <a href="#汉语">汉语</a>
</p>

---

# 术后老人每日菜谱

<a id="汉语"></a>

## 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [在线预览](#在线预览)
- [技术栈](#技术栈)
- [部署方式](#部署方式)
- [项目结构](#项目结构)
- [许可证](#许可证)

---

### 项目简介

一个为术后老人设计的单页网页应用，展示每日菜谱，并提供"今日叮嘱"区域用于显示用药、运动和预约提醒。

针对 **31.5 英寸 1080p 屏幕（175% 缩放）** 优化布局，在保证老人阅读体验的前提下尽量减少滚动。

### 功能特性

- **每日菜谱轮换** — 根据日期自动匹配主食和菜品
- **换一换按钮** — 随机切换其他菜谱
- **今日叮嘱** — 分色卡片显示用药、运动、饮食、电话/预约提醒
- **适老设计** — 大字体、高对比度、SVG 图标、低认知负担
- **单文件部署** — 无构建工具、无依赖，仅一个 `dish.html`
- **响应式布局** — 适配桌面、平板和手机

### 在线预览

GitHub Pages: `https://<用户名>.github.io/<仓库名>/dish.html`

### 技术栈

| 层级 | 选型                                |
| ---- | ----------------------------------- |
| 结构 | 语义化 HTML5                        |
| 样式 | 原生 CSS（CSS 变量、Flexbox、Grid） |
| 逻辑 | 原生 JavaScript（兼容 ES5）         |
| 图标 | 内联 SVG（Lucide 风格）             |
| 字体 | Noto Sans SC（Google Fonts）        |

### 部署方式

**Nginx：**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/directory;
        index dish.html;
    }
}
```

**GitHub Pages：**

1. 推送到 `main` 分支
2. 进入仓库 Settings → Pages → Source: Deploy from branch
3. 选择 `/ (root)` 或包含 `dish.html` 的目录
4. 访问 `https://<用户名>.github.io/<仓库名>/dish.html`

**任意静态托管** — 直接上传 `dish.html` 即可。

### 项目结构

```
postoperative/
├── dish.html                  # 主程序（单文件）
├── 老人饮食参考清单.docx       # 饮食参考文档
├── README.md
└── .gitignore
```

### 许可证

MIT
