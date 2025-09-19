export type OpportunityStage = "new"| "prospect" | "negotiation" | "won" | "lost";

export interface Opportunities {
  id: number;
  name: string;
  stage: OpportunityStage;
  amount?: string;
  accountName: string;
}
