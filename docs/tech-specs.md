# CLUB UNDEFINED — 技术规范

## 技术栈

| 项目 | 版本 |
|------|------|
| Next.js | 16.2.6 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Motion (Framer Motion) | latest |
| Node.js | >=24 |

## 项目结构

```
src/
├── app/            # Next.js App Router
│   ├── layout.tsx  # 根布局（Inter 字体 + 暗色模式 + Navbar/Footer/GrainOverlay）
│   ├── page.tsx    # 首页（组合5屏）
│   └── globals.css # 设计系统（@theme 色板 + 颗粒纹理 + 基础样式）
├── components/
│   ├── layout/     # Navbar / Footer / GrainOverlay
│   ├── sections/   # Hero / Problem / Solution / ProductShowcase / Waitlist
│   ├── ui/         # CTAButton / SectionHeading / Divider / BreathingElement
│   └── motion/     # FadeIn / ParallaxSlow
├── lib/
│   ├── constants.ts # 所有文案和配置
│   └── utils.ts     # cn() 工具函数
└── types/
    └── index.ts     # TypeScript 类型定义
```

## 关键设计决策

### 暗色模式
- `dark` class 硬编码在 `<html>` 上，作为唯一模式
- 使用 CSS 自定义属性通过 Tailwind v4 `@theme inline` 桥接

### 动效
- 不使用 spring 动画
- 不使用 staggerChildren
- 所有进入动画使用 `easeOut`，duration 0.8s
- 呼吸圆：5秒周期，scale 1→1.04
- 所有动画支持 `prefers-reduced-motion`

### 字体
- Inter via `next/font/google`
- 加载字重：300 (Light), 400 (Regular), 500 (Medium)
- 品牌名：weight 300, tracking-[0.3em], uppercase

### 响应式断点
- 移动端：< 640px — 单列，py-16
- sm：640px — 表单横排
- md：768px — 多列网格，py-24
- lg：1024px — 最大留白，py-32

## 性能

- 纯静态页面，可导出为 static export
- 无外部图片（v1 使用 CSS 占位）
- 颗粒纹理为内联 SVG data URI
- Framer Motion tree-shaking
- `next/font` 自动子集化
