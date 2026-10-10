export const account_appeal_and_recovery_sop_content = {
  en: `
<h2>1. Account Status & Ban Type Diagnosis</h2>
<p>When an account encounters access issues, first identify the exact ban type to choose the appropriate recovery action:</p>

<ul>
  <li><strong>IP Region Block (Access Denied / 403):</strong> "Claude is not available in your region". Solution: Your account is fine; update your proxy node to a residential IP in a supported country (US, UK, SG, JP).</li>
  <li><strong>Subscription Refunded or Payment Declined:</strong> A failed payment ends Pro access and returns the account to the Free plan. Anthropic does not receive the bank's reason for a decline and does not publish which cards it blocks. Solution: Work through the <a href="/guides/payment-methods-comparison/">official decline checklist</a>, then rebind a credit or debit card whose billing address matches your bank's record.</li>
  <li><strong>Account Permanently Disabled (Disabled):</strong> "Your account has been disabled after review". Solution: Submit a formal English appeal via the dedicated portal at <a href="https://claude.ai/restricted" target="_blank" rel="noopener noreferrer">claude.ai/restricted</a>. The form opens only while you are logged in to the disabled account. Anthropic's Help Center lists three ban reasons: repeated Usage Policy violations, account creation from an unsupported location, and Terms of Service violations. From the same screen you can export your data or delete the account; the data you can export may be restricted depending on the violation, so export before you delete. Anthropic notes that response times are currently longer than normal.</li>
  <li><strong>Organization On Hold:</strong> Your own account is in good standing, but an organization you belong to was paused for unusual activity. The restricted-account screen lists each paused organization. Solution: Click "Request a review" on the affected organization.</li>
  <li><strong>API Violation Warning / False Positive:</strong> Organization-level API alerts or suspected misclassification. Solution: Email <a href="mailto:usersafety@anthropic.com">usersafety@anthropic.com</a> with request IDs and usage context.</li>
</ul>

<h2>2. H1 2026 Transparency Data & Realistic Expectations</h2>
<p>Anthropic's Transparency Hub (last updated July 23, 2026) reports that in the first half of 2026 alone, <strong>11.4 million</strong> policy-violating accounts were disabled, <strong>398,000</strong> appeals were received, and <strong>42,000</strong> were successfully reinstated — an approximate <strong>10.5% appeal success rate</strong>. These figures cover all accounts and do not predict the outcome of yours. Anthropic does not publish what makes an appeal succeed. What you control is a factual appeal with verifiable context, and community reports say replacement accounts created during a review add association risk.</p>

<h2>3. Fact-Based English Appeal SOP</h2>
<p>When appealing a disabled account, describe only facts you can verify. An invented explanation cannot be checked against your account history and weakens the appeal. Fill every placeholder with your real situation and delete any line that does not apply:</p>

<h3>English Appeal Template (fill in real details)</h3>
<pre><code>Subject: Appeal for Disabled Claude Account [Your-Email@domain.com]

Dear Anthropic Safeguards Team,

I am writing to request a review of my account (Email: [Your-Email@domain.com]), which was disabled on [date and time zone].

Notice received: "[exact text of the notice]"
Where I used Claude: [claude.ai / Claude Code / API]
How I use it: [your actual use, e.g. software development for project X, academic research at institution Y]
Network and location: [where you were located and how you connected, including any VPN or proxy, stated accurately]
Payment: [plan, type of payment method, and purchase date]

I have not shared my login, resold access, or used automation to bypass limits. [Delete this sentence if it is not accurate.]

Please review my account and let me know what additional information you need.

Thank you for your time.

Best regards,
[Your Name]</code></pre>
<p>Submit it through the appeal form while logged in, keep the notice and a copy of your submission, and do not file duplicate appeals or open replacement accounts while the review is pending.</p>

<h2>4. Refunds After a Ban</h2>
<p>If your account was disabled immediately after paying for Claude Pro or Team:</p>

<ol>
  <li>Submit the appeal email above first.</li>
  <li>Request a refund in the product with Get help &gt; Claude Refund Request. For subscriptions bought through the App Store or Google Play, use that store's refund flow. Keep the "Your receipt from Anthropic" emails.</li>
  <li>Treat a bank dispute as a last resort after the refund request. Anthropic has not published how disputes affect an account.</li>
</ol>
`,
  zh: `
<h2>一、 封号类型与异常现象判定</h2>
<p>遇到账号无法正常使用时，首先需明确具体的拦截类型，采取针对性的解决措施：</p>

<ul>
  <li><strong>IP 节点地区阻断（403 / Access Denied）：</strong> 提示 "Claude is not available in your region"。判定：账号本身安全，仅为当前代理节点被识别为受限地区。解决：切换至支持地区（美国、英国、新加坡、日本）的原生住宅代理节点。</li>
  <li><strong>订阅被退款或扣款被拒：</strong> 扣款失败会终止 Pro 权益，账号退回 Free 计划。Anthropic 收不到银行拒绝的具体原因，也没有公布会拦截哪些卡。解决：先对照<a href="/zh/guides/payment-methods-comparison/">官方扣款失败清单</a>排查，再绑定账单地址与银行记录一致的信用卡或借记卡。</li>
  <li><strong>账号彻底禁用（Disabled / Suspended）：</strong> 提示 "Your account has been disabled after review"。判定：账号被系统判定违规或触发黑名单。解决：访问专用申诉入口 <a href="https://claude.ai/restricted" target="_blank" rel="noopener noreferrer">claude.ai/restricted</a> 填写官方英文申诉表单。申诉表只有在登录被禁用的账号后才能打开。帮助中心列出三类封禁原因：反复违反使用政策、从不受支持的地区创建账户、违反服务条款。同一页面可以导出数据或删除账号；可导出的数据范围可能因违规类型而受限，请先导出再决定是否删除。官方提示目前回复时间比平时更长。</li>
  <li><strong>组织被暂停（Organization On Hold）：</strong> 你自己的账号状态正常，但所属组织因异常活动被暂停。受限账号页面会列出每个被暂停的组织。解决：在对应组织上点击 "Request a review"。</li>
  <li><strong>API 违规警示 / 误判：</strong> 组织级 API 告警或疑似误分类。解决：发送邮件至 <a href="mailto:usersafety@anthropic.com">usersafety@anthropic.com</a>，附上 request ID 与使用场景说明。</li>
</ul>

<h2>二、 2026 上半年透明度数据与合理预期</h2>
<p>Anthropic Transparency Hub（2026 年 7 月 23 日更新）披露：2026 上半年共封禁 <strong>1140 万</strong>违规账号，收到 <strong>39.8 万</strong>起申诉，成功解封 <strong>4.2 万</strong>起 — 解封率约 <strong>10.5%</strong>。这些数字覆盖所有账号，不能预测你的申诉结果。Anthropic 没有公布申诉成功的判断标准。你能控制的是基于事实的申诉和可验证的背景信息；社区反馈认为，复核期间新建替代账号会增加关联风险。</p>

<h2>三、 基于事实的英文申诉 SOP</h2>
<p>申诉被禁用的账号时，只写你能核实的事实。编造的解释无法与账号历史对照，反而会削弱申诉。请用真实情况填写每个占位符，不适用的行直接删除：</p>

<h3>英文申诉邮件模板（请填写真实信息）</h3>
<pre><code>Subject: Appeal for Disabled Claude Account [你的注册邮箱]

Dear Anthropic Safeguards Team,

I am writing to request a review of my account (Email: [你的注册邮箱]), which was disabled on [日期与时区].

Notice received: "[通知原文]"
Where I used Claude: [claude.ai / Claude Code / API]
How I use it: [真实用途，例如某项目的软件开发、某机构的学术研究]
Network and location: [所在地区，以及实际的联网方式（含 VPN 或代理），如实填写]
Payment: [套餐、支付方式类型与购买日期]

I have not shared my login, resold access, or used automation to bypass limits. [如与事实不符，请删除这句]

Please review my account and let me know what additional information you need.

Thank you for your time.

Best regards,
[你的姓名/拼音]</code></pre>
<p>请在登录状态下通过申诉表单提交，保留通知原文和提交内容的副本；复核期间不要重复提交申诉，也不要另开新号。</p>

<h2>四、 封号后的退款</h2>
<p>如果刚充值 Claude Pro / Team 即遭遇封号：</p>

<ol>
  <li>优先发送上述英文申诉邮件申请解封。</li>
  <li>在产品内通过 Get help &gt; Claude Refund Request 申请退款。通过 App Store 或 Google Play 订阅的，使用对应商店的退款流程。保留「Your receipt from Anthropic」邮件。</li>
  <li>银行争议是退款申请之后的最后手段。Anthropic 没有公布银行争议对账号的影响。</li>
</ol>
`,
};
