# CLUB UNDEFINED — 执行步骤

## Phase 1: 项目初始化 + 设计系统 ✅

- [x] create-next-app 脚手架
- [x] npm install motion
- [x] globals.css 设计系统
- [x] layout.tsx（Inter 字体 + 暗色模式 + metadata）
- [x] constants.ts 文案
- [x] utils.ts / types/index.ts

## Phase 2: 布局外壳 ✅

- [x] Navbar — 固定顶部，半透明，品牌名 + Join
- [x] Footer — 极简，品牌名 + 版权
- [x] GrainOverlay — SVG 噪点覆盖层

## Phase 3: UI 原语 ✅

- [x] CTAButton — 描边风格，transition 700ms
- [x] SectionHeading — weight 300, tracking-[0.08em]
- [x] Divider — 短横线 w-12
- [x] BreathingElement — 5秒呼吸圆

## Phase 4: 动画原语 ✅

- [x] FadeIn — whileInView, y=16, duration=0.8, once
- [x] ParallaxSlow — 极慢速视差
- [x] prefers-reduced-motion 支持

## Phase 5: 五屏构建 ✅

- [x] Hero — 全屏高，品牌名 + 呼吸圆 + CTA
- [x] Problem — 3列纯文字
- [x] Solution — 3列成分说明
- [x] ProductShowcase — CSS 几何占位
- [x] Waitlist — 表单状态机

## Phase 6: 响应式 + 打磨

- [ ] 移动端测试
- [ ] 平板端测试
- [ ] 滚动节奏微调
- [ ] 字体渲染检查

## Phase 7: 文档 + CLAUDE.md + 开发日志

- [x] /docs/ 文件夹
- [ ] /devlog/ 文件夹 + 初始记录
- [ ] 根 CLAUDE.md

## 最终验证

- [ ] npm run dev 无报错
- [ ] 暗色背景 + Inter 字体
- [ ] 5屏完整渲染
- [ ] 呼吸圆动画正常
- [ ] FadeIn 正常触发
- [ ] 移动端响应式
- [ ] Waitlist 表单状态切换
- [ ] TypeScript 编译通过
