import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { fetchLeads } from "../services/LeadsService";
import type { Lead } from "../@types/Leads";

interface LeadsContextProps {
  leads: Lead[] | [];
  loading: boolean;
  updateLead: (lead: Lead) => void;
}

const LeadsContext = createContext<LeadsContextProps | undefined>(undefined);

export const LeadsProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

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
    <LeadsContext.Provider value={{ leads, loading, updateLead }}>
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
