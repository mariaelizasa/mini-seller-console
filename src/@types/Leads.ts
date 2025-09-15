type LeadStatus =
  | "new"
  | "inContact"
  | "qualified"
  | "notInterested"
  | "converted"
  | "notInterested";

export interface Leads {
  id: number;
  name: string;
  company: string;
  email: string;
  source: string;
  score: number;
  status: LeadStatus;
}
