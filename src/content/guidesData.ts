/**
 * Bilingual article bodies for the anti-ban knowledge base, keyed by guide slug.
 * Metadata (title, category, dates, sources, related guides) lives in
 * `src/config/guides.ts`.
 */

import { claude_steganography_and_risk_model_content } from './guides/claude-steganography-and-risk-model';
import { environment_cleanup_and_ip_setup_content } from './guides/environment-cleanup-and-ip-setup';
import { account_registration_and_payment_antiban_content } from './guides/account-registration-and-payment-antiban';
import { claude_code_and_api_safety_content } from './guides/claude-code-and-api-safety';
import { account_appeal_and_recovery_sop_content } from './guides/account-appeal-and-recovery-sop';
import { domestic_and_open_source_alternatives_content } from './guides/domestic-and-open-source-alternatives';
import { browser_configuration_guide_content } from './guides/browser-configuration-guide';
import { vpn_and_proxy_selection_content } from './guides/vpn-and-proxy-selection';
import { ban_case_studies_content } from './guides/ban-case-studies';
import { multi_account_management_content } from './guides/multi-account-management';
import { api_advanced_optimization_content } from './guides/api-advanced-optimization';
import { troubleshooting_guide_content } from './guides/troubleshooting-guide';
import { device_setup_guide_content } from './guides/device-setup-guide';
import { payment_methods_comparison_content } from './guides/payment-methods-comparison';
import { regional_access_strategy_content } from './guides/regional-access-strategy';
import { automation_safety_practices_content } from './guides/automation-safety-practices';
import { claude_ai_content_watermarking_content } from './guides/claude-ai-content-watermarking';
import { antiban_essentials_content } from './guides/antiban-essentials';

export interface GuideContent {
  en: string;
  zh: string;
}

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  'antiban-essentials': antiban_essentials_content,
  'claude-steganography-and-risk-model': claude_steganography_and_risk_model_content,
  'environment-cleanup-and-ip-setup': environment_cleanup_and_ip_setup_content,
  'account-registration-and-payment-antiban': account_registration_and_payment_antiban_content,
  'claude-code-and-api-safety': claude_code_and_api_safety_content,
  'account-appeal-and-recovery-sop': account_appeal_and_recovery_sop_content,
  'domestic-and-open-source-alternatives': domestic_and_open_source_alternatives_content,
  'browser-configuration-guide': browser_configuration_guide_content,
  'vpn-and-proxy-selection': vpn_and_proxy_selection_content,
  'ban-case-studies': ban_case_studies_content,
  'multi-account-management': multi_account_management_content,
  'api-advanced-optimization': api_advanced_optimization_content,
  'troubleshooting-guide': troubleshooting_guide_content,
  'device-setup-guide': device_setup_guide_content,
  'payment-methods-comparison': payment_methods_comparison_content,
  'regional-access-strategy': regional_access_strategy_content,
  'automation-safety-practices': automation_safety_practices_content,
  'claude-ai-content-watermarking': claude_ai_content_watermarking_content,
};
