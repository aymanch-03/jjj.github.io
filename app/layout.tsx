import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "JJJ | Jira's Jackpot Jungle",
  description: "JJJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/jjjLogo.svg" />
      </head>
      <body>
        <main className="h-full">
          <Header />
          <Chat />
          {children}
          <div className="md:ml-[85px] sm:ml-[4.5rem] mx-auto">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
