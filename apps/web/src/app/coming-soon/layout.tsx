import { ModeToggle } from "@/components/mode-toggle";

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-svh grid-rows-[auto_1fr]">
      <div className="flex items-center justify-end px-4 py-3 sm:px-6">
        <ModeToggle />
      </div>
      {children}
    </div>
  );
}
