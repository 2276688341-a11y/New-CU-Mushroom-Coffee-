# CLUB UNDEFINED — 设计规范

## 品牌关键词

极简 · 克制 · 黑白灰 · 高级 · 冷静 · 稳定 · 有力量但不张扬 · 高压现代生活 · 被理解感 · 少即是多

## 配色方案

| Token | 色值 | 用途 |
|-------|------|------|
| `--bg` | `#0A0A0A` | 主背景 |
| `--surface` | `#111111` | 区块背景 |
| `--surface-elevated` | `#1A1A1A` | 高亮表面 |
| `--text-primary` | `#FAFAFA` | 主文字 |
| `--text-secondary` | `#A3A3A3` | 次文字 |
| `--text-tertiary` | `#737373` | 辅助文字 |
| `--border` | `#2A2A2A` | 边框 |
| `--accent` | `#FAFAFA` | 强调色 |

## 禁用色系

- 棕色 / 木纹 / 牛皮纸
- 科技蓝
- 绿色 / 植物色
- 暖色调
- 任何饱和度 > 10% 的颜色

## 字体层级

| 元素 | 字重 | 字号 | 字间距 | 大小写 |
|------|------|------|--------|--------|
| 品牌名 | 300 | 5xl–8xl | 0.3em | 大写 |
| 区块标题 | 300 | 3xl–5xl | 0.08em | — |
| 卡片标题 | 400 | sm | 0.2em | 大写 |
| 正文 | 300 | base–lg | — | — |
| 标签 | 400 | xs–sm | 0.2em–0.3em | 大写 |
| CTA | 400 | sm | 0.2em | 大写 |

## 间距

- 区块垂直 padding：移动端 96px，桌面端 128px
- 最大内容宽度：max-w-4xl / max-w-5xl
- 文字永远不会全屏宽

## 动效规范

- 速度：慢（duration ≥ 0.6s）
- 幅度：小（y ≤ 16px, scale ≤ 0.04）
- 缓动：easeOut / easeInOut only
- 触发：whileInView, once: true
- 禁用：spring, stagger, bounce, 大幅滚动动画
- 节奏：像"深呼吸"

## 参考气质

- Nothing（产品极简）
- Arc Browser（品牌克制）
- Aesop（部分页面留白）
- Apple 早期产品页（字体叙事）

## 禁止元素

- 咖啡豆图标
- 功能图标
- 复杂 UI
- 卡片阴影
- 渐变
- 圆角 > 4px
- 商品感 CTA（Buy Now / Shop Now）
