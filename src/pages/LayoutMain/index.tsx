import Footer from "@/coreComponents/Footer";
import Header from "@/coreComponents/Header";
import MainContent from "@/coreComponents/MainContent";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
