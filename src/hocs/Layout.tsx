import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-100 grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-auto">
        <main className="h-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
