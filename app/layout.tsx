import type { Metadata } from "next";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

async function getHeader() {
  const res = await fetch(`${STRAPI_URL}/api/header?populate=*`, {
    next: { revalidate: 3600 },
  });

  const { data } = await res.json();
  return data;
}

async function getFooter() {
  const res = await fetch(
    `${STRAPI_URL}/api/footer?populate[footerMenu][populate][navigationLink]=true&populate[socailLinks]=true&populate[certificationLogo]=true`,
    {
      next: { revalidate: 3600 },
    },
  );

  const { data } = await res.json();
  return data;
}

export const metadata: Metadata = {
  title: "Go Mo",
  description: "Go Mo Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);

  return (
    <html lang="en">
      <body>
        <Header data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
