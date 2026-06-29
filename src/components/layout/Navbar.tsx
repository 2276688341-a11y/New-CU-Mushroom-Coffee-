"use client";

import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-24">
        <span className="text-xs font-light tracking-[0.3em] uppercase text-text-secondary">
          CLUB UNDEFINED
        </span>

        <div className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-normal tracking-[0.2em] uppercase text-text-secondary transition-colors duration-700 hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
