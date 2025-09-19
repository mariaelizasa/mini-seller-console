import Header from "./components/Header";
import Tabs from "./components/Tabs";
import { LeadsProvider } from "./context/LeadContext";

function App() {
  return (
    <>
      <LeadsProvider>
        <Header />
        <Tabs/>
      </LeadsProvider>
    </>
  );
}

export default App;
