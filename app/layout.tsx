import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets:["latin"], variable:"--font-syne", display:"swap" });

export const metadata: Metadata = {
  title:"Silente",
  description:"Hay cosas que necesitas saber. Hay cosas que necesitas hablar.",
  robots:{ index:true, follow:true },
};

export const viewport: Viewport = {
  width:"device-width",
  initialScale:1,
  viewportFit:"cover",
  themeColor:"#121B26",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="es"><body className={syne.variable}>{children}</body></html>;
}
