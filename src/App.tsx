import Header from "./components/Header";
import Tabs from "./components/Tabs";
import { LeadsProvider } from "./context/LeadContext";
import { OpportunitiesProvider } from "./context/OpportunitiesContext";

function App() {
  return (
    <>
      <LeadsProvider>
        <OpportunitiesProvider>
        <Header />
        <Tabs/>
        </OpportunitiesProvider>
      </LeadsProvider>
    </>
  );
}

export default App;
