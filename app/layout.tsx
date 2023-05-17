/* eslint-disable @next/next/no-sync-scripts */
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export const metadata = {
  title: "Jira’s Jackpot Jungle",
  description: "JJJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <main className="app">
        <Header />
        <Sidebar />
        {children}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
    </html>
  );
}
