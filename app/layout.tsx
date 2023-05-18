import Header from "@/components/Header";
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
      <main className="h-full">
        <Header />

        {children}
      </main>
    </html>
  );
}
