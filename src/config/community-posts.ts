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
  | 'multi-account';

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
  engagement?: CommunityPostEngagement;
}

export const POST_TAGS: Record<CommunityPostTag, { en: string; zh: string }> = {
  payment: { en: 'Payment', zh: '支付' },
  registration: { en: 'Registration', zh: '注册' },
  appeal: { en: 'Appeal', zh: '申诉解封' },
  infrastructure: { en: 'Infrastructure', zh: '基础设施' },
  'claude-code': { en: 'Claude Code', zh: 'Claude Code' },
  'multi-account': { en: 'Multi-Account', zh: '多账号' },
};

export const COMMUNITY_POSTS: CommunityPost[] = [
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
      en: 'Include verifiable academic or development-use proof in appeals — success rates improve significantly.',
      zh: '提供合规学术/开发用途证明，申诉解封率可大幅提高。',
    },
    tags: ['appeal'],
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
  },
];

/** Most recent first. */
export function getLatestCommunityPosts(limit?: number): CommunityPost[] {
  const sorted = [...COMMUNITY_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
