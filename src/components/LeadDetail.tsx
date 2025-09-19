import { useState } from "react";
import type { Lead } from "../@types/Leads";
import { useLeads } from "../context/LeadContext";
import InputField from "./InputField";
import SelectField from "./SelectField";

type LeadDetailProps = {
  selectedLead: Lead | null;
  setSelectedLead: (lead: Lead | null) => void;
};

const LeadDetail = ({ selectedLead, setSelectedLead }: LeadDetailProps) => {
  const [isValid, setIsValid] = useState(false);

  if (!selectedLead) return null;
  const { updateLead } = useLeads();

  return (
    <div className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-gradient-to-b from-pink-50 to-purple-50 shadow-2xl p-6 flex flex-col overflow-y-auto">
      <h2 className="text-black font-bold text-2xl mb-2 text-left">
        Lead Details 🌺
      </h2>
      <div className="h-px bg-gray-300 mb-6 w-full" />

      <div
        className="flex flex-col gap-5 mb-6 invalid:border-red-500
             valid:border-green-500"
      >
        <InputField
          id="lead-email"
          label="Email:"
          value={selectedLead.email}
          onChange={(val, valid) => {
            setSelectedLead({ ...selectedLead, email: val });
            if (valid !== undefined) setIsValid(valid);
          }}
          type="email"
        />

        <SelectField
          id="lead-status"
          label="Status:"
          value={selectedLead.status}
          options={[
            "new",
            "inContact",
            "qualified",
            "notInterested",
            "converted",
          ]}
          onChange={(val) =>
            setSelectedLead({ ...selectedLead, status: val as Lead["status"] })
          }
        />

        <div className="flex gap-4 mt-2">
          <button
            disabled={!isValid}
            onClick={() => {
              if (selectedLead) {
                updateLead(selectedLead);
                setSelectedLead(null);
              }
            }}
            className={`flex-1 px-4 py-2 rounded-full transition
              ${
                isValid
                  ? "bg-pink-500 text-white hover:bg-purple-500 hover:border-purple-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            Save
          </button>
          <button
            onClick={() => setSelectedLead(null)}
            className="flex-1 px-4 py-2 rounded-full border border-pink-500 text-pink-500 bg-white hover:bg-pink-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetail;
