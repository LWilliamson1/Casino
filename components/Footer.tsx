import Link from "next/link";
import TieflingLogo from "./TieflingLogo";
import { D20Icon, DragonIcon, GobletIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-rune to-transparent" />
      <div className="h-px mt-1 bg-gradient-to-r from-transparent via-arcane-violet to-transparent opacity-40" />

      <div className="bg-dungeon-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

            {/* Brand column */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
              <TieflingLogo size={90} />
              <div>
                <h3 className="font-cinzel-decorative text-gold-rune text-lg font-bold">
                  Draughts &amp; Dragons
                </h3>
                <p className="font-im-fell italic text-parchment-dark opacity-70 text-sm mt-1">
                  Tavern &amp; Tomes
                </p>
              </div>
              <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed text-center md:text-left">
                Where adventurers gather, tales are told, and the ale flows as freely as the magic.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-cinzel text-gold-rune text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <D20Icon size={20} /> Navigation
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "The Tavern Home" },
                  { href: "/offerings", label: "Our Wares" },
                  { href: "/events", label: "Events Calendar" },
                  { href: "/events#book", label: "Book a Space" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-im-fell text-parchment-dark opacity-70 hover:opacity-100 hover:text-gold-rune transition-all text-sm"
                    >
                      ⚔ {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-cinzel text-gold-rune text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <DragonIcon size={20} /> Our Wares
              </h4>
              <ul className="space-y-2">
                {[
                  "Miniatures &amp; Terrain",
                  "Paints &amp; Supplies",
                  "Board Games",
                  "Trading Card Games",
                  "Event Space",
                ].map((item) => (
                  <li key={item}>
                    <span
                      className="font-im-fell text-parchment-dark opacity-70 text-sm"
                      dangerouslySetInnerHTML={{ __html: `✦ ${item}` }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / Hours */}
            <div>
              <h4 className="font-cinzel text-gold-rune text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <GobletIcon size={20} /> Find Us
              </h4>
              <div className="space-y-3 font-im-fell text-sm text-parchment-dark opacity-70">
                <div>
                  <p className="text-gold-rune opacity-90 font-semibold">Tavern Hours</p>
                  <p>Mon–Thu: 12pm – 11pm</p>
                  <p>Fri–Sat: 12pm – 2am</p>
                  <p>Sunday: 12pm – 10pm</p>
                </div>
                <div>
                  <p className="text-gold-rune opacity-90 font-semibold">Roll for Initiative</p>
                  <p>123 Dragon's Rest Lane</p>
                  <p>Adventure City, AC 12345</p>
                </div>
                <div>
                  <p className="text-gold-rune opacity-90 font-semibold">Send a Raven</p>
                  <p>hello@draughtsndragons.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-rune">
            <span className="text-gold-rune text-lg">⚜</span>
            <span className="text-gold-rune text-lg">🐉</span>
            <span className="text-gold-rune text-lg">⚜</span>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
            <p className="font-im-fell text-parchment-dark opacity-40 text-sm italic">
              &copy; {new Date().getFullYear()} Draughts &amp; Dragons. All rights reserved. May your rolls be ever in your favor.
            </p>
            <div className="flex items-center gap-2 text-parchment-dark opacity-40">
              <D20Icon size={16} />
              <span className="font-cinzel text-xs tracking-widest">ROLL FOR ADVENTURE</span>
              <D20Icon size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="h-1 bg-gradient-to-r from-dragon-red via-arcane-violet to-dragon-red" />
    </footer>
  );
}
