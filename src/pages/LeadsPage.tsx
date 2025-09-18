import { useLeads } from "../context/LeadContext";

const LeadsPage = () => {
  const { leads } = useLeads();
  console.log("leads", leads)
  
  return (
    <>
      <div>Leads</div>
    </>
  );
};

export default LeadsPage;
