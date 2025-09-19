import { useState } from "react";
import { useLeads } from "../context/LeadContext";
import LeadDetail from "../components/LeadDetail";
import LeadTable from "../components/LeadTable";
import type { Lead } from "../@types/Leads";
import { useOpportunities } from "../context/OpportunitiesContext";
import type { Opportunities, OpportunityStage } from "../@types/Opportunities";
import Loading from "../components/Loading";
import EmptyList from "../components/EmptyList";

const LeadsPage = () => {
  const {
    filteredLeads,
    loading,
    setSearchTerm,
    setStatusFilter,
    setSortByScore,
  } = useLeads();

  const { addOpportunity } = useOpportunities();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [status, setStatus] = useState<Lead["status"] | "">("");
  const [search, setSearch] = useState("");

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
      <div className="flex justify-center mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="text"
            placeholder="Search by name or company"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchTerm(e.target.value);
            }}
            className="p-2 border rounded w-full sm:w-64"
          />

          <select
            value={status}
            onChange={(e) => {
              const val = e.target.value as Lead["status"] | "";
              setStatus(val);
              setStatusFilter(val);
            }}
            className="p-2 border rounded w-full sm:w-48"
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="inContact">In Contact</option>
            <option value="qualified">Qualified</option>
            <option value="notInterested">Not Interested</option>
            <option value="converted">Converted</option>
          </select>

          <button
            onClick={() => setSortByScore(true)}
            className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-purple-500 transition w-full sm:w-auto"
          >
            Sort by Score ↓
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : filteredLeads.length === 0 ? (
        <EmptyList message="No leads found." />
      ) : (
        <LeadTable leads={filteredLeads} setSelectedLead={setSelectedLead} />
      )}

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
