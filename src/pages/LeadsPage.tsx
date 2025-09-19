import { useState } from "react";
import { useLeads } from "../context/LeadContext";
import LeadDetail from "../components/LeadDetail";
import LeadTable from "../components/LeadTable";
import type { Lead } from "../@types/Leads";

const LeadsPage = () => {
  const { leads, loading } = useLeads();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  return (
    <>
      <LeadTable leads={leads} setSelectedLead={setSelectedLead}></LeadTable>

      <LeadDetail
        selectedLead={selectedLead}
        setSelectedLead={setSelectedLead}
      ></LeadDetail>
    </>
  );
};

export default LeadsPage;
