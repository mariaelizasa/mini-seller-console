type OpportunityStage = "prospect" | "negotiation" | "won" | "lost";

export interface Opportunities {
  id: number;
  name: string;
  stage: OpportunityStage;
  amount?: number;
  accountName: string;
}
