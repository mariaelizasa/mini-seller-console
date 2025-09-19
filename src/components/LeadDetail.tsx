import { useState } from "react";
import type { Lead } from "../@types/Leads";
import { useLeads } from "../context/LeadContext";
import InputField from "./InputField";
import SelectField from "./SelectField";
import type { OpportunityStage } from "../@types/Opportunities";

type LeadDetailProps = {
  selectedLead: Lead | null;
  setSelectedLead: (lead: Lead | null) => void;
  convertLead: (lead: Lead, stage: OpportunityStage, amount?: string) => void;
};

const LeadDetail = ({
  selectedLead,
  setSelectedLead,
  convertLead,
}: LeadDetailProps) => {
  const { updateLead } = useLeads();
  const [isValid, setIsValid] = useState(
    selectedLead ? /\S+@\S+\.\S+/.test(selectedLead.email) : false
  );
  const [touched, setTouched] = useState(false);
  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState<OpportunityStage>("new");

  if (!selectedLead) return null;

  return (
    <div className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-gradient-to-b from-pink-50 to-purple-50 shadow-2xl p-6 flex flex-col overflow-y-auto">
      <h2 className="text-black font-bold text-2xl mb-4 text-left">
        Lead Details 🌺
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <span className="text-gray-700 font-medium">Edit Lead</span>
        <span className="text-gray-500 text-sm">
          Modify the fields below to update the Lead.
        </span>

        <InputField
          id="lead-email"
          label="Email:"
          value={selectedLead.email}
          onBlur={() => setTouched(true)}
          onChange={(val, valid) => {
            setSelectedLead({ ...selectedLead, email: val });
            if (valid !== undefined) setIsValid(valid);
          }}
          type="email"
        />
        {touched && !isValid && (
          <span className="text-red-500 text-sm">
            The email address is not valid!
          </span>
        )}

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
            className={`flex-1 px-4 py-2 rounded-full transition ${
              isValid
                ? "bg-pink-500 text-white hover:bg-purple-500 hover:border-purple-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
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

      <div className="h-px bg-gray-300 my-6" />
      <div className="flex flex-col gap-4 mb-6">
        <span className="text-gray-700 font-medium">
          Convert Lead to Opportunity
        </span>
        <span className="text-gray-500 text-sm">
          Fill in the fields below to create an Opportunity.
        </span>

        <SelectField
          id="opportunity-stage"
          label="Stage:"
          value={stage}
          options={["new", "prospect", "negotiation", "won", "lost"]}
          onChange={(val) => setStage(val as OpportunityStage)}
        />

        <InputField
          id="lead-amount"
          label="Opportunity value (optional):"
          value={amount}
          type="text"
          onChange={(val) => setAmount(val)}
        />

        <div className="flex gap-4 mt-2">
          <button
            type="button"
            onClick={() => {
              if (selectedLead) {
                updateLead({ ...selectedLead, status: "converted" });
                convertLead(selectedLead, stage, amount);
                setSelectedLead(null);
              }
            }}
            className="flex-1 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            Convert Lead
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetail;
