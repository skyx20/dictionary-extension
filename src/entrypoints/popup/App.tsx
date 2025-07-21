import Layout from "@/hocs/Layout";
import Search from "@/pages/Search";
import "../../assets/tailwind.css";
import Meaning from "../../pages/Meaning";
import { HashRouter as Router, Routes, Route } from "react-router";
import { PageContext, PageProvider } from "@/hooks/PageContext";

//  TODO: fix the button animation loading of search
//  TODO: fix the "not feedback given" when the server is not available
//  TODO: create a setting page, for what? idk yet
//  TODO: Add a select component to provide the type of dict

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
