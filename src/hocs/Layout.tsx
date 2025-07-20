import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
