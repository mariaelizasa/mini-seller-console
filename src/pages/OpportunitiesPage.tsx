import type { Opportunities } from "../@types/Opportunities";
import { Th } from "../utils/TableHeader";

type OpportunityTableProps = {
  opportunities: Opportunities[];
};

const OpportunitiesPage = ({ opportunities }: OpportunityTableProps) => {
  if (opportunities.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto mt-6 h-[calc(100vh-160px)] overflow-y-auto p-4 border  border-gray-300 rounded-lg shadow ">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-pink-50">
          <tr>
            <Th>Name</Th>
            <Th>Stage</Th>
            <Th>Amount</Th>
            <Th>AccountName</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {opportunities.map((opp) => (
            <tr key={opp.id}>
              <td className="px-4 py-2 text-gray-700">{opp.name}</td>
              <td className="px-4 py-2 text-gray-700">{opp.stage}</td>
              <td className="px-4 py-2 text-gray-700">{opp.amount || "-"}</td>
              <td className="px-4 py-2 text-gray-700">{opp.accountName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpportunitiesPage;
