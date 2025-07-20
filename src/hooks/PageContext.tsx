import { createContext } from "react";
import { useState } from "react";
import Search from "@/pages/Search";
import Meaning from "@/pages/Meaning";
import { JSX } from "react";

type ProvideValues = {
  currentPage: string;
  setPage: (currentPage: string) => void;
  renderPage: () => JSX.Element;
};

const PageContext = createContext({});

function PageProvider({ children }) {
  const [activePage, setActivePage] = useState("");

  function renderPage() {
    switch (activePage) {
      case "meanings":
        return <Meaning />;
      default: {
        return <Search />;
      }
    }
  }
  const values: ProvideValues = {
    currentPage: activePage,
    setPage: setActivePage,
    renderPage: renderPage,
  };

  return (
    <PageContext.Provider
      value={{
        currentPage: activePage,
        setPage: setActivePage,
        renderPage: renderPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export { PageProvider, PageContext };
