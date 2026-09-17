export const profile = {
  name: "黄国庆",
  nameEn: "HUANG GUOQING",
  role: "实习前端研发工程师",
  school: "北京航空航天大学",
  grade: "研二在读",
  location: "北京",
  availability: "可长期实习 · 远程 · 不要求转正",
  phone: "188-7847-0551",
  email: "21373025@buaa.edu.cn",
  headline: "把撮合、履约、资金做成可上线的状态机。",
}

export const skills = [
  "JavaScript",
  "TypeScript",
  "Vue 3",
  "uni-app",
  "Vite",
  "React",
  "Node.js",
  "Express",
  "TypeORM",
  "PostgreSQL",
  "JWT",
  "Git",
  "Cursor",
]

export const about = {
  education: [
    {
      school: "北京航空航天大学",
      college: "仪器科学与光电工程学院",
      major: "电子信息 · 专业硕士",
      period: "2025.09 – 2028.06",
      note: "研二在读 · 测控方向",
    },
    {
      school: "北京航空航天大学",
      college: "仪器科学与光电工程学院",
      major: "智能感知工程 · 本科",
      period: "2021.09 – 2025.06",
      note: "GPA 3.52 / 4.00 · 专业 7/23",
    },
  ],
  points: [
    "执行力强，能把复杂业务拆成可交付模块并跟到上线。",
    "可独立负责从需求分析、前后端实现到测试/生产发布与线上问题闭环。",
    "擅长把撮合、履约、资金做成可上线的状态机，而不是停留在页面堆砌。",
  ],
}

export type Project = {
  id: string
  title: string
  role: string
  period: string
  summary: string
  tags: string[]
  accent: string
  body: string[]
}

export const projects: Project[] = [
  {
    id: "youjieguo",
    title: "优结果教育撮合平台",
    role: "全栈开发 · 独立负责",
    period: "2026.04 – 2026.09",
    summary:
      "教育撮合微信小程序 + Node 后端，从零到一设计实现并上线；覆盖双角色匹配、即时通讯、订单支付与课时履约。",
    tags: ["uni-app", "Vue 3", "Vite", "TypeScript", "Node.js"],
    accent: "from-sky-500/30 to-indigo-700/20",
    body: [
      "基于 uni-app + Vue 3 / Vite 搭建 60+ 页面，封装统一请求层（多环境、Token、401/403 会话同步）。",
      "实现站内 IM（图文语音、位置、订单卡片）与双身份底栏、广场筛选推荐；按微信审核落地游客可逛与 AI 内容标识。",
      "将上传改为对象存储 STS 直传；建立独立 TypeScript 规格仓，前后端共享接口契约；配置测试/生产双环境，发版可回退。",
      "设计课时级订单状态机，覆盖支付、接单、超时处理与退款回冲；打通配套 Web 管理台与前台（审核、配置）；落地错题本与 OCR 搜题。",
    ],
  },
  {
    id: "bairhino",
    title: "白犀牛智达 · 碰撞事故检测",
    role: "自动驾驶碰撞事故检测",
    period: "2024.07 – 2024.08",
    summary:
      "基于实车 IMU 完成事故检测二分类，并接入障碍物多边形与主车尺寸，完成相交检测与时间回放可视化。",
    tags: ["Python", "SVM", "IMU", "可视化"],
    accent: "from-cyan-400/25 to-slate-800/40",
    body: [
      "基于实车 IMU 完成事故检测二分类：滑动窗口特征、SVM 与网格调参。",
      "接入实车障碍物多边形与主车尺寸，完成相交检测与时间回放可视化。",
    ],
  },
]
