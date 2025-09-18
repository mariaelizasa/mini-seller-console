import type { LeadStatus } from "./LeadStatus";

export interface Leads {
  id: number;
  name: string;
  company: string;
  email: string;
  source: string;
  score: number;
  status: LeadStatus;
}
