import { LpIntegrationsBanner } from '@/components/lp/LpIntegrationsBanner';

const ISSUE_RADAR_INTEGRATIONS = [
  'Zendesk',
  'Intercom',
  'Front',
  'HubSpot',
  'Crisp',
  'Salesforce',
  'Zoho Desk'
] as const;

export function IssueRadarIntegrations() {
  return <LpIntegrationsBanner integrations={ISSUE_RADAR_INTEGRATIONS} />;
}
