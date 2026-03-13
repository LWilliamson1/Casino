"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TieflingLogo from "./TieflingLogo";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "The Tavern" },
    { href: "/offerings", label: "Our Wares" },
    { href: "/events", label: "Events" },
  ];

  return (
    <header className="relative z-50">
      {/* Top decorative bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-rune to-transparent" />

      <div
        className="bg-dungeon-dark border-b border-dungeon-purple"
        style={{ boxShadow: "0 4px 20px rgba(74,45,110,0.5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">

            {/* Logo + Title */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-arcane-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                <TieflingLogo size={80} className="relative z-10 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div>
                <h1
                  className="font-cinzel-decorative font-black text-2xl md:text-3xl leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #f0c040, #d4af37, #8b6914)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "none",
                  }}
                >
                  Draughts &amp;
                </h1>
                <h1
                  className="font-cinzel-decorative font-black text-2xl md:text-3xl leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #c0392b, #8b1a1a, #c0392b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Dragons
                </h1>
                <p className="font-im-fell text-xs text-parchment-dark opacity-70 italic tracking-widest mt-0.5">
                  Tavern &amp; Tomes
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-cinzel text-sm tracking-widest uppercase transition-all duration-200 ${
                    pathname === link.href
                      ? "text-gold-rune"
                      : "text-parchment-dark hover:text-gold-rune"
                  }`}
                >
                  {link.href === pathname && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-rune rounded" />
                  )}
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/events"
                className="font-cinzel text-sm tracking-wider uppercase px-5 py-2.5 rounded border border-gold-rune text-gold-rune
                  hover:bg-gold-rune hover:text-dungeon-dark transition-all duration-300
                  shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              >
                Book an Event
              </Link>
            </div>

            {/* Mobile menu icon */}
            <button className="md:hidden text-parchment-dark hover:text-gold-rune transition-colors" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          <nav className="md:hidden flex gap-6 mt-4 pt-4 border-t border-dungeon-purple">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-cinzel text-xs tracking-widest uppercase ${
                  pathname === link.href ? "text-gold-rune" : "text-parchment-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-arcane-violet to-transparent opacity-50" />
    </header>
  );
}
