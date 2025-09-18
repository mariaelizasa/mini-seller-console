import { useState } from "react";;
import LeadsPage from "../pages/LeadsPage";
import OpportunitiesPage from "../pages/OpportunitiesPage";

const Header = () => {
  const [activeTab, setActiveTab] = useState("leads");

  return (
    <>
      <header className="text-center mb-6">
        <h1 className="text-2xl text-gray-700">Mini Console Seller ✨</h1>
        <div className="h-px bg-gray-300 my-4"></div>
      </header>

      <div className="flex justify-center mb-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("leads")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "leads"
              ? "border-b-4 border-pink-500 text-pink-500"
              : "text-gray-500"
          }`}
        >
          Leads
        </button>
        <button
          onClick={() => {
            setActiveTab("opportunities");
          }}
          className={`ml-4 px-4 py-2 font-semibold ${
            activeTab === "opportunities"
              ? "border-b-4 border-purple-500 text-purple-500"
              : "text-gray-500"
          }`}
        >
          Opportunities
        </button>
      </div>

      <div className="text-center mt-6">
        {activeTab === "leads" ? (
          <LeadsPage></LeadsPage>
        ) : (
          <OpportunitiesPage></OpportunitiesPage>
        )}
      </div>
    </>
  );
};

export default Header;
