import { Navigation } from "@/components/navigation";
import { SITE_NAME } from "@/constants";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="text-center text-sm py-4">©2025 {SITE_NAME}</footer>
    </div>
  );
}
