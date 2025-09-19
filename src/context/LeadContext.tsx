import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useMemo,
} from "react";

import { fetchLeads } from "../services/LeadsService";
import type { Lead } from "../@types/Leads";

interface LeadsContextProps {
  leads: Lead[] | [];
  loading: boolean;
  filteredLeads: Lead[];
  updateLead: (lead: Lead) => void;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: Lead["status"] | "") => void;
  setSortByScore: (desc: boolean) => void;
}

const LeadsContext = createContext<LeadsContextProps | undefined>(undefined);

export const LeadsProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<Lead["status"] | "">("");
  const [sortDesc, setSortDesc] = useState(true);

  const filteredLeads = useMemo(() => {
    let result = [...leads];

    if (statusFilter) {
      result = result.filter((lead) => lead.status === statusFilter);
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (lead) =>
          lead.name.toLowerCase().includes(term) ||
          lead.company.toLowerCase().includes(term)
      );
    }
    result.sort((a, b) => (sortDesc ? b.score - a.score : a.score - b.score));

    return result;
  }, [leads, searchTerm, statusFilter, sortDesc]);

  const updateLead = (updatedLead: Lead) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );
  };

  useEffect(() => {
    fetchLeads().then((data) => {
      setLeads(data);
      setLoading(false);
    });
  }, []);

  return (
    <LeadsContext.Provider
      value={{
        leads,
        loading,
        filteredLeads,
        updateLead,
        setSearchTerm,
        setStatusFilter,
        setSortByScore: setSortDesc,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) {
    throw new Error("useLeads must be used within a LeadsProvider");
  }
  return context;
};
