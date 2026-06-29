import { FOOTER } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs font-light tracking-[0.3em] uppercase text-text-tertiary">
          {FOOTER.text} &copy; {year}
        </span>
      </div>
    </footer>
  );
}
