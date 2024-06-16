import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/app/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LITTLE ANGEL INSTITUTE OF PROFESSIONAL STUDIES",
  description: "Welcome to LAIPS located in Mhow, Madhya Pradesh, Inida,  a serene and peaceful place embraced by a lush green environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode[];
}>) {
  return (
    <html lang="en" className=" ">
      <body className={inter.className}>
        
          <App>{children}</App>
      </body>
    </html>
  );
}
