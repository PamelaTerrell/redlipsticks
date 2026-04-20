import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function PageLayout({ children, bgClassName = "bg-[#faf7f2] text-[#2d1e1e]" }) {
  return (
    <div className={`min-h-screen ${bgClassName}`}>
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
}