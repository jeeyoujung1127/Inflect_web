import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "INFLECT — US GTM AI Diagnostics",
  description: "AI로 미국 진출(GTM) 성공 확률과 진단 리포트를 생성합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}