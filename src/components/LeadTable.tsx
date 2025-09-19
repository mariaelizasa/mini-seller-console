import type { Lead } from "../@types/Leads";
import { Th } from "../utils/TableHeader";

type LeadTableProps = {
  leads: Lead[];
  setSelectedLead: (lead: Lead | null) => void;
};

const LeadTable = ({ leads, setSelectedLead }: LeadTableProps) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 h-[calc(100vh-160px)] overflow-y-auto p-4 border  border-gray-300 rounded-lg shadow ">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-pink-50">
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Email</Th>
            <Th>Source</Th>
            <Th>Score</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {leads.map((lead: Lead) => (
            <tr
              key={lead.id}
              className="hover:bg-pink-50 cursor-pointer transition"
              onClick={() => setSelectedLead(lead)}
            >
              <td className="px-4 py-2 text-pink-500 font-bold">{lead.id}</td>
              <td className="px-4 py-2 text-gray-700">{lead.name}</td>
              <td className="px-4 py-2 text-gray-700">{lead.company}</td>
              <td className="px-4 py-2 text-purple-900">{lead.email}</td>
              <td className="px-4 py-2 text-gray-700">{lead.source}</td>
              <td className="px-4 py-2 font-bold text-pink-500">
                {lead.score}
              </td>
              <td className="px-4 py-2 text-gray-700">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
