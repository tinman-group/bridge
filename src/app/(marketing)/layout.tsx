import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col justify-stretch align-top">
        {children}
      </main>
      <Footer />
    </div>
  );
}
