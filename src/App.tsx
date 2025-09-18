import Header from "./components/Header";
import Layout from "./components/Layout";
import { LeadsProvider } from "./context/LeadContext";

function App() {
  return (
    <>
      <LeadsProvider>
        <Layout>
          <Header />
        </Layout>
      </LeadsProvider>
    </>
  );
}

export default App;
