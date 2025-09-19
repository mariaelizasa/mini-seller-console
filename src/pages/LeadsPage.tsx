import { useState } from "react";
import { useLeads } from "../context/LeadContext";
import LeadDetail from "../components/LeadDetail";
import LeadTable from "../components/LeadTable";
import type { Lead } from "../@types/Leads";
import { useOpportunities } from "../context/OpportunitiesContext";
import type { Opportunities, OpportunityStage } from "../@types/Opportunities";

const LeadsPage = () => {
  const { leads, loading } = useLeads();
  const { addOpportunity } = useOpportunities();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const convertLead = (
    lead: Lead,
    stage: OpportunityStage,
    amount?: string
  ) => {
    const newOpportunity: Opportunities = {
      id: Date.now(),
      name: lead.name,
      stage: stage || "new",
      amount: amount || "",
      accountName: lead.company,
    };
    addOpportunity(newOpportunity);
    setSelectedLead(null);
  };

  return (
    <>
      <LeadTable leads={leads} setSelectedLead={setSelectedLead}></LeadTable>

      {selectedLead && (
        <LeadDetail
          selectedLead={selectedLead}
          setSelectedLead={setSelectedLead}
          convertLead={convertLead}
        />
      )}
    </>
  );
};

export default LeadsPage;
