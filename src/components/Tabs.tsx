import { useState } from "react";
import LeadsPage from "../pages/LeadsPage";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import { useOpportunities } from "../context/OpportunitiesContext";
import EmptyList from "./EmptyList";

const Header = () => {
  const [activeTab, setActiveTab] = useState<"leads" | "opportunities">(
    "leads"
  );
  const { opportunities } = useOpportunities();
  const tabs = [
    { id: "leads", label: "Leads" },
    { id: "opportunities", label: "Opportunities" },
  ];

  const getButtonClasses = (tabId: string) =>
    `px-4 py-2 rounded-full transition ${
      activeTab === tabId
        ? "bg-pink-500 text-white hover:bg-purple-500 hover:border-purple-500"
        : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-100"
    }`;

  return (
    <>
      <div className="flex justify-center gap-4 m-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "leads" | "opportunities")}
            className={getButtonClasses(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "leads" ? (
          <LeadsPage />
        ) : opportunities.length === 0 ? (
          <EmptyList message="No opportunities found." />
        ) : (
          <OpportunitiesPage opportunities={opportunities} />
        )}
      </div>
    </>
  );
};

export default Header;
