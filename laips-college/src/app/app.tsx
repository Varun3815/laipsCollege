import React from "react";
import Topbar from "@/components/global/Topbar";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default function App({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      <Topbar />
      <Header />
      <main className="container h-screen my-4">{children}</main>

      <Footer />
    </>
  );
}
