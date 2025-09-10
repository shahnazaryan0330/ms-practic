import { Fira_Code } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const notoSans = localFont({
  src: [
    {path: '/fonts/NotoSansArmenian-Regular.woff2', weight: '400', style: 'normal'}
  ],
  variable: '--font-noto-sans'
})

export const metadata = {
  title: "MS Practic",
  description: "MS Practic",
};

import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${notoSans.variable}`}>
        <Header />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
