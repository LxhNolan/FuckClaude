/**
 * Curated X (Twitter) community posts on Claude anti-ban practices.
 * Manually maintained — structured for easy future API integration.
 */

export type CommunityPostTag =
  | 'payment'
  | 'registration'
  | 'appeal'
  | 'infrastructure'
  | 'claude-code'
  | 'multi-account'
  | 'usage';

export interface CommunityPostEngagement {
  likes?: number;
  reposts?: number;
  replies?: number;
}

export interface CommunityPost {
  id: string;
  authorName: string;
  handle: string;
  profileUrl: string;
  postUrl: string;
  publishedAt: string;
  title: { en: string; zh: string };
  text: { en: string; zh: string };
  takeaway: { en: string; zh: string };
  tags: CommunityPostTag[];
  /** Guide that covers the same topic in depth. */
  relatedGuideSlug?: string;
  engagement?: CommunityPostEngagement;
}

export const POST_TAGS: Record<CommunityPostTag, { en: string; zh: string }> = {
  payment: { en: 'Payment', zh: '支付' },
  registration: { en: 'Registration', zh: '注册' },
  appeal: { en: 'Appeal', zh: '申诉解封' },
  infrastructure: { en: 'Infrastructure', zh: '基础设施' },
  'claude-code': { en: 'Claude Code', zh: 'Claude Code' },
  'multi-account': { en: 'Multi-Account', zh: '多账号' },
  usage: { en: 'Usage Behavior', zh: '使用行为' },
};

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'ayi-ainotes-national-day-antiban-guide',
    authorName: 'AYi',
    handle: 'AYi_AInotes',
    profileUrl: 'https://x.com/AYi_AInotes',
    postUrl: 'https://x.com/AYi_AInotes/status/2106639522586829094',
    publishedAt: '2026-10-04',
    title: {
      en: 'Long-form anti-ban guide after the National Day ban reports: environment, payment, usage, local settings',
      zh: '国庆封号反馈后的万字防封指南：环境、支付、使用行为与本机设置',
    },
    text: {
      en: 'An X article organized in four layers. Environment: one fixed exit node per account, TUN mode, system timezone matched to the exit region, and WebRTC, DNS, and leftover-proxy checks. Account and payment: App Store in-app purchase as a refund fallback, and ramping from Free to Pro before Max. Usage: do not drain the weekly quota. Claude Code: official client only, with telemetry switches set in `settings.json`. It ends with an 11-step minimum setup and an ordered checklist for appeals and refunds. The post contains affiliate links for third-party IP and card services; this site does not endorse them.',
      zh: '一篇按四层组织的 X 长文。环境：每个账号固定一个出口节点、开启 TUN 模式、系统时区与出口地区一致，并检查 WebRTC、DNS 与代理残留。账号与支付：优先走 App Store 内购以保留退款退路，按 Free → Pro → Max 的顺序升级。使用行为：不要把周额度刷空。Claude Code：只用官方客户端，并在 `settings.json` 中设置遥测开关。文末给出 11 步最低稳法，以及申诉与退款的处理顺序。原帖含第三方 IP 与银行卡服务的推广链接，本站不做背书。',
    },
    takeaway: {
      en: 'Fix one exit node and one device per account, and check WebRTC, DNS, and leftover proxy variables (`ANTHROPIC_BASE_URL`, `HTTPS_PROXY`) before every login. Keep code in local Git so a ban does not take project state with it.',
      zh: '每个账号固定一个出口节点和一台设备，每次登录前检查 WebRTC、DNS 与残留代理变量（`ANTHROPIC_BASE_URL`、`HTTPS_PROXY`）。代码保存在本地 Git，避免封号时连项目状态一起丢失。',
    },
    tags: ['infrastructure', 'payment', 'claude-code'],
    relatedGuideSlug: 'antiban-essentials',
  },
  {
    id: 'minlibuilds-two-accounts-banned-same-day',
    authorName: '实践哥 Li',
    handle: 'MinLiBuilds',
    profileUrl: 'https://x.com/MinLiBuilds',
    postUrl: 'https://x.com/MinLiBuilds/status/2105890192108536029',
    publishedAt: '2026-10-02',
    title: {
      en: 'Two accounts banned on the same day with different notices: network is not the only trigger',
      zh: '两个号同日被封且提示不同：只盯网络不够',
    },
    text: {
      en: 'After sharing anti-ban tips with a friend, the author lost two accounts on the same day. One notice said the login country was wrong; the other cited a Usage Policy violation. The author says they regularly use Claude for borderline tasks such as decompilation and adult-content research, and suspects content, not only network, contributed to the ban.',
      zh: '作者向朋友传授防封经验后，自己的两个账号同日被封。一个提示登录国家不对，另一个提示违反 Usage Policy。作者表示自己常让 Claude 处理反编译、成人内容调研等边缘任务，怀疑封号不只与网络有关，内容也是原因之一。',
    },
    takeaway: {
      en: 'Bans arrive through two separate channels: access signals (region, login country) and content (Usage Policy). A clean network setup does not protect an account whose prompts trigger policy classifiers.',
      zh: '封号有两条独立通道：访问信号（地区、登录国家）与内容（Usage Policy）。网络环境再干净，也挡不住提示词触发策略分类器。',
    },
    tags: ['usage'],
    relatedGuideSlug: 'ban-case-studies',
  },
  {
    id: 'wangray-six-month-stable-setup',
    authorName: 'Ray Wang',
    handle: 'wangray',
    profileUrl: 'https://x.com/wangray',
    postUrl: 'https://x.com/wangray/status/2105658146685608265',
    publishedAt: '2026-10-01',
    title: {
      en: 'Six-month stable setup, shared during the National Day ban reports',
      zh: '国庆封号反馈期间分享：半年稳定使用的配置',
    },
    text: {
      en: 'Shares a configuration used for six months without a ban: a dedicated Mac, US-West timezone, one account that was never switched, Surge in rule mode, a dedicated residential IP in Hawaii, a US credit card, 50–80% weekly quota use, and remote access to the host when away. The author adds that no method is 100% safe and that a stable IP plus moderate usage most likely lowers the risk.',
      zh: '分享过去半年未被封的配置：独立 Mac 主机、美西时区、单账号从未切换、Surge 规则模式常开、夏威夷独立家宽 IP、美国信用卡、每周用量 50%–80%，外出时远程访问主机发起任务。作者强调不存在 100% 防封的方法，稳定 IP 加非高频使用大概率能降低风险。',
    },
    takeaway: {
      en: 'Keep it boring: one account, one device, one exit IP, and a weekly quota that stays below the limit.',
      zh: '保持稳定、少变化：一个账号、一台设备、一个出口 IP，周额度留出余量。',
    },
    tags: ['infrastructure', 'payment', 'usage'],
    relatedGuideSlug: 'environment-cleanup-and-ip-setup',
  },
  {
    id: 'realchendahuang-three-layer-defense',
    authorName: '陈大黄',
    handle: 'realchendahuang',
    profileUrl: 'https://x.com/realchendahuang',
    postUrl: 'https://x.com/realchendahuang/status/2104455272614035947',
    publishedAt: '2026-09-28',
    title: {
      en: 'Three-layer anti-ban review from dozens of field reports: leaks, billing credit, usage pacing',
      zh: '几十位用户反馈整理：网络泄漏、账单信用、调用节奏三层防线',
    },
    text: {
      en: 'Summarizes feedback from dozens of users. Many bans trace to DNS or WebRTC exposing the real location, not to the IP type. Billing credit weighs as much as network: web-page billing with domestic dual-currency or virtual cards is a frequent ban pattern, while an App Store in-app purchase with a US Apple ID hides issuer details. New accounts need a ramp-up period, and the weekly quota should not be exhausted every cycle. The author says language is not the deciding factor; network fingerprint and call frequency are.',
      zh: '整理几十位用户的反馈。不少封号的诱因是 DNS 或 WebRTC 暴露了真实位置，而不是 IP 类型。账单信用的权重不低于网络：网页端绑定国内双币卡或虚拟卡是封号高发场景，而用美区 Apple ID 走 App Store 内购可以隔离发卡行信息。新号需要缓冲期，周额度也不要每次耗尽。作者认为语言不是判定指标，网络指纹与调用频率才是。',
    },
    takeaway: {
      en: 'Run a leak check (WebRTC, DNS, system language, timezone) before each login, avoid web-page virtual-card billing, and leave quota headroom on new accounts instead of draining them within days.',
      zh: '每次登录前做泄漏自查（WebRTC、DNS、系统语言、时区），避开网页端虚拟卡支付，新号别在几天内把额度刷干，留出余量。',
    },
    tags: ['infrastructure', 'payment', 'usage'],
    relatedGuideSlug: 'antiban-essentials',
  },
  {
    id: 'kieranji404-virtual-card-ban',
    authorName: 'Kieran Ji',
    handle: 'kieranji404',
    profileUrl: 'https://x.com/kieranji404',
    postUrl: 'https://x.com/kieranji404/status/2096384314992910370',
    publishedAt: '2026-09-05',
    title: {
      en: 'Second Claude ban — likely triggered by virtual U-card payment',
      zh: 'Claude 第二次封号 — 排查原因为虚拟 U 卡支付',
    },
    text: {
      en: 'Claude account banned for the second time. After ruling out IP and registration issues, the most likely cause is paying with a high-risk virtual U-card. Recommend using Wise inbound transfers or a real debit card instead.',
      zh: 'Claude 第二次被封号。排除 IP 与注册问题后，大概率因使用虚拟 U 卡支付触发风控。建议尽量使用 Wise 入金或真实借记卡。',
    },
    takeaway: {
      en: 'Avoid high-risk virtual-card BINs; prefer Wise overseas accounts or real Visa/Mastercard debit cards.',
      zh: '避免高风险虚拟卡/U 卡卡头，推荐 Wise 境外账户或真实 Visa/Mastercard 借记卡。',
    },
    tags: ['payment'],
    relatedGuideSlug: 'payment-methods-comparison',
  },
  {
    id: 'qianyuwing-clean-gmail-registration',
    authorName: '芊羽Wing',
    handle: 'qianyuwing',
    profileUrl: 'https://x.com/qianyuwing',
    postUrl: 'https://x.com/qianyuwing/status/2096175929911296432',
    publishedAt: '2026-09-04',
    title: {
      en: 'Stable Claude Code setup amid recent ban wave',
      zh: 'Claude Code 封号潮下的稳定注册经验',
    },
    text: {
      en: 'Sharing what has kept my Claude Code account stable through the recent ban wave: use a clean Gmail registered months ago, bind a real US phone number, and set an aged Gmail as recovery email.',
      zh: '针对近期 Claude Code 封号潮的稳定经验：采用几个月前注册的干净 Gmail、绑定真实美区手机号，辅助邮箱绑定老 Gmail。',
    },
    takeaway: {
      en: 'Registration environment and email reputation matter — avoid disposable numbers and fresh throwaway inboxes.',
      zh: '注册环境与邮箱权重至关重要，避免临时虚拟号接码。',
    },
    tags: ['registration', 'claude-code'],
    relatedGuideSlug: 'account-registration-and-payment-antiban',
  },
  {
    id: 'neoaicompiler-appeal-success-day2',
    authorName: 'Neo',
    handle: 'NeoAiCompiler',
    profileUrl: 'https://x.com/NeoAiCompiler',
    postUrl: 'https://x.com/NeoAiCompiler/status/2096081821771669534',
    publishedAt: '2026-09-03',
    title: {
      en: 'Account restored on day 2 via official appeal',
      zh: '封号第 2 天通过官方申诉顺利恢复',
    },
    text: {
      en: 'Claude account disabled — submitted the standard English appeal through the official channel and got access back on day 2. Do not spin up replacement accounts while waiting.',
      zh: 'Claude 封号第 2 天通过官方申诉顺利恢复账号。申诉期间不要重复建号。',
    },
    takeaway: {
      en: 'After a ban, use the standard English appeal flow at claude.ai/restricted — reinstatement is achievable.',
      zh: '封号后不要慌乱重复建号，通过 claude.ai/restricted 标准英文申诉流程有明确成功解封概率。',
    },
    tags: ['appeal'],
    relatedGuideSlug: 'account-appeal-and-recovery-sop',
  },
  {
    id: 'raymondzhu-appeal-with-proof',
    authorName: 'Raymond Zhu',
    handle: 'raymondzhu',
    profileUrl: 'https://x.com/raymondzhu',
    postUrl: 'https://x.com/raymondzhu/status/2096210657184207105',
    publishedAt: '2026-09-04',
    title: {
      en: 'Successful reinstatement after official appeal — sharing confirmation email',
      zh: '官方申诉渠道提交后成功解封，分享解封通知邮件',
    },
    text: {
      en: 'Submitted an appeal through Anthropic\'s official channel with proof of legitimate academic/development use. Received reinstatement confirmation email within a few days.',
      zh: '在官方申诉渠道提交后成功解封 Claude 账号，分享解封通知邮件。申诉中提供了合规学术/开发用途证明。',
    },
    takeaway: {
      en: 'Include verifiable academic or development-use proof in appeals; it gives reviewers something to check.',
      zh: '申诉时附上可验证的学术或开发用途证明，让审核方有可核对的内容。',
    },
    tags: ['appeal'],
    relatedGuideSlug: 'account-appeal-and-recovery-sop',
  },
  {
    id: 'orientlinden-multi-account-failover',
    authorName: '林微明',
    handle: 'OrientLinden',
    profileUrl: 'https://x.com/OrientLinden',
    postUrl: 'https://x.com/OrientLinden/status/2096270753968628132',
    publishedAt: '2026-09-05',
    title: {
      en: 'Multi-account failover strategy with isolated IPs',
      zh: '多账号容灾策略 — 独立隔离 IP 养号',
    },
    text: {
      en: 'Production should never depend on a single Claude account. I run isolated residential IPs for separate Claude and ChatGPT backup accounts so a primary ban does not halt delivery.',
      zh: '分享多账号容灾策略：使用独立隔离 IP 分别养 Claude 与 ChatGPT 备用号，防止主号遭遇风控阻断生产业务。',
    },
    takeaway: {
      en: 'Never single-point your production stack — build an isolated primary/backup account matrix.',
      zh: '生产环境严禁单点依赖，建立隔离环境的主备账号矩阵。',
    },
    tags: ['multi-account', 'infrastructure'],
    relatedGuideSlug: 'multi-account-management',
  },
  {
    id: 'daodaodl-residential-ip-claude-code',
    authorName: 'DaoDaodl',
    handle: 'JichuanT45327',
    profileUrl: 'https://x.com/JichuanT45327',
    postUrl: 'https://x.com/JichuanT45327/status/2096151684602904651',
    publishedAt: '2026-09-03',
    title: {
      en: 'Claude Code global deployment anti-ban guide',
      zh: 'Claude Code 全局部署防封指南',
    },
    text: {
      en: 'Claude Code deployment checklist: clean US dual-ISP static residential IP, OS timezone aligned with IP region, WebRTC leak prevention on Windows/Mac. Datacenter IPs are the #1 ban trigger.',
      zh: 'Claude Code 全局部署防封指南：配置纯净美国双 ISP 静态住宅 IP + Windows/Mac 系统时区与 WebRTC 防泄漏。数据中心机房 IP 是封号重灾区。',
    },
    takeaway: {
      en: 'Datacenter IPs are high-risk — pair Claude Code with residential broadband and fully aligned local timezone.',
      zh: '数据中心机房 IP 是封号重灾区，Claude Code 需搭配住宅家宽 IP 与本地系统时区完全对齐。',
    },
    tags: ['infrastructure', 'claude-code'],
    relatedGuideSlug: 'claude-code-and-api-safety',
  },
  {
    id: 'yifanxu-claude-code-rate-limits',
    authorName: 'Yifan Xu',
    handle: 'yifanxu_ephai',
    profileUrl: 'https://x.com/yifanxu_ephai',
    postUrl: 'https://x.com/yifanxu_ephai/status/2096315059240894701',
    publishedAt: '2026-09-05',
    title: {
      en: 'Claude Code frequency and token-consumption risk boundaries',
      zh: 'Claude Code 频次与 Token 消耗风控体验',
    },
    text: {
      en: 'Documenting where high-frequency tool_use and automated requests cross from normal usage into model refusals or org-level disable. Short bursts of extreme concurrency are worse than sustained moderate load.',
      zh: '讨论高频工具调用与自动化请求触发模型拒答或组织禁用的边界。短时间超高频 tool_use 比持续中等负载更危险。',
    },
    takeaway: {
      en: 'Throttle Claude Code automation frequency and concurrent tool calls — avoid burst patterns that look like distillation.',
      zh: '控制 Claude Code 自动化频率与单次并发，避免短时间超高频 tool_use。',
    },
    tags: ['claude-code'],
    relatedGuideSlug: 'automation-safety-practices',
  },
];

/** Most recent first. */
export function getLatestCommunityPosts(limit?: number): CommunityPost[] {
  const sorted = [...COMMUNITY_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
