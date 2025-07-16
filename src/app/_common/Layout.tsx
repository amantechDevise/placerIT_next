
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 ">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
