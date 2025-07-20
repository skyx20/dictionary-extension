import Layout from "@/hocs/Layout";
import Search from "@/pages/Search";
import "../../assets/tailwind.css";
import Meaning from "../../pages/Meaning";
import { HashRouter as Router, Routes, Route } from "react-router";
import { PageContext, PageProvider } from "@/hooks/PageContext";

function App() {
  return (
    <>
      {/* <PageProvider> */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="*" element={<Search />}></Route>
            {/* <Route path="/search" element={<Search />}></Route> */}
            <Route
              path="/meanings/:word/:dictVariant"
              element={<Meaning />}
            ></Route>
          </Routes>
        </Layout>
      </Router>

      {/* </PageProvider> */}
    </>
  );
}

export default App;
