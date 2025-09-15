import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeadsPage from "../pages/LeadsPage";
import OpportunitiesPage from "../pages/OpportunitiesPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeadsPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;