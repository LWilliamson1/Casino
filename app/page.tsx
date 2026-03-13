import Link from "next/link";
import { D20Icon, DragonIcon, GobletIcon, ScrollIcon, MagicStarIcon } from "@/components/Icons";
import TieflingLogo from "@/components/TieflingLogo";

const announcements = [
  {
    id: 1,
    type: "EVENT",
    typeColor: "bg-arcane-purple text-parchment",
    date: "March 21, 2026",
    title: "Grand Opening: Spring Equinox Celebration!",
    body:
      "The dragons have spoken — our doors open to all adventurers this Spring Equinox! Enjoy half-price pints, live bardic music, and a special mini-painting session. First 50 guests receive an exclusive Draughts & Dragons stein.",
    icon: "🐉",
    pinned: true,
  },
  {
    id: 2,
    type: "NEW ARRIVAL",
    typeColor: "bg-gold-rune text-dungeon-dark",
    date: "March 18, 2026",
    title: "New Stock: Reaper Bones Black & Citadel Contrast Paints",
    body:
      "Fresh off the wagon! We've restocked our Reaper Bones Black line and received the full range of Citadel Contrast 2.0 paints. Stop in to browse — our staff painters are on hand to help you choose the right colours for your warband.",
    icon: "🎨",
    pinned: false,
  },
  {
    id: 3,
    type: "ANNOUNCEMENT",
    typeColor: "bg-dungeon-purple text-parchment",
    date: "March 15, 2026",
    title: "Friday Night Magic Returns — Modern Format",
    body:
      "Your favourite weekly tournament is back! FNM runs every Friday at 7pm. Entry is 5 gold (or $5). Prizes include store credit and exclusive alternate-art Draughts & Dragons promo cards. Pre-register at the counter.",
    icon: "🃏",
    pinned: false,
  },
  {
    id: 4,
    type: "COMMUNITY",
    typeColor: "bg-dragon-red text-parchment",
    date: "March 10, 2026",
    title: "Pint Night Results: The Ale of Enchantment Wins!",
    body:
      "After a fierce brew-off between six local craft breweries, the crowd has spoken. The Ale of Enchantment from Misty Mountain Brewery takes the crown! It will be our featured draft for the next month. Cheers, adventurers!",
    icon: "🍺",
    pinned: false,
  },
];

const featuredOfferings = [
  {
    icon: <DragonIcon size={48} />,
    title: "Minis & Terrain",
    desc: "High-end resin miniatures and hand-crafted terrain pieces for your campaigns.",
    href: "/offerings#minis",
  },
  {
    icon: <GobletIcon size={48} />,
    title: "Craft Ales & Spirits",
    desc: "A curated selection of brews themed for every class, race, and alignment.",
    href: "/offerings#bar",
  },
  {
    icon: <MagicStarIcon size={48} />,
    title: "Event Space",
    desc: "Private rooms for campaigns, tournaments, and celebrations of all kinds.",
    href: "/offerings#events",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">

        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-dungeon-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #4a2d6e 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 80%, #8b1a1a 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 80% 80%, #8b1a1a 0%, transparent 60%)",
          }}
        />

        {/* Floating runes */}
        {["✦", "⚜", "⚔", "🐲", "🎲", "⚜", "✦"].map((rune, i) => (
          <div
            key={i}
            className="absolute text-gold-rune opacity-10 text-2xl animate-float select-none pointer-events-none"
            style={{
              left: `${10 + i * 13}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            {rune}
          </div>
        ))}

        {/* Stone archway decorations */}
        <div className="absolute left-0 top-0 bottom-0 w-16 opacity-20"
          style={{ background: "linear-gradient(to right, #2d1f3d, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 opacity-20"
          style={{ background: "linear-gradient(to left, #2d1f3d, transparent)" }} />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-float">
            <TieflingLogo size={160} className="drop-shadow-[0_0_30px_rgba(155,77,202,0.5)]" />
          </div>

          <div className="divider-rune mb-2">
            <span className="text-gold-rune">⚜</span>
            <span className="text-gold-rune text-xs font-cinzel tracking-[0.4em] uppercase text-parchment-dark opacity-70">
              Welcome, Adventurer
            </span>
            <span className="text-gold-rune">⚜</span>
          </div>

          <h2
            className="font-cinzel-decorative font-black text-5xl md:text-7xl leading-tight mb-2"
            style={{
              background: "linear-gradient(135deg, #f0c040 0%, #d4af37 40%, #8b6914 70%, #d4af37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Draughts &amp;
          </h2>
          <h2
            className="font-cinzel-decorative font-black text-5xl md:text-7xl leading-tight mb-6"
            style={{
              background: "linear-gradient(135deg, #c0392b 0%, #8b1a1a 50%, #c0392b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dragons
          </h2>

          <p className="font-im-fell italic text-parchment-dark text-xl md:text-2xl opacity-80 mb-3 leading-relaxed">
            A Tavern &amp; Tomes Experience
          </p>
          <p className="font-im-fell text-parchment-dark opacity-60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Gather round, weary traveller. Fine ales, premium miniatures, legendary game nights,
            and the finest painting supplies await within these enchanted walls.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/events"
              className="font-cinzel text-sm tracking-wider uppercase px-8 py-3.5 rounded
                bg-gold-rune text-dungeon-dark font-bold
                hover:bg-gold-bright transition-all duration-300
                shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)]"
            >
              View Events
            </Link>
            <Link
              href="/offerings"
              className="font-cinzel text-sm tracking-wider uppercase px-8 py-3.5 rounded
                border border-arcane-violet text-arcane-violet
                hover:bg-arcane-violet hover:text-parchment transition-all duration-300
                shadow-[0_0_10px_rgba(155,77,202,0.2)] hover:shadow-[0_0_30px_rgba(155,77,202,0.5)]"
            >
              Explore Wares
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="font-cinzel text-xs tracking-widest text-parchment-dark">SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4 L8 20 M2 14 L8 20 L14 14" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* ─── FEATURED OFFERINGS STRIP ───────────────────────────── */}
      <section className="relative py-16 px-4 bg-dungeon-mid border-y border-dungeon-purple">
        <div className="max-w-6xl mx-auto">
          <div className="divider-rune mb-10">
            <span className="font-cinzel text-gold-rune text-xs tracking-[0.4em] uppercase opacity-70">
              What Awaits You
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOfferings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="offering-card p-6 text-center group cursor-pointer"
              >
                <div className="icon-wrap mx-auto group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-cinzel text-gold-rune text-lg mb-2">{item.title}</h3>
                <p className="font-im-fell text-parchment-dark opacity-70 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-arcane-violet text-xs font-cinzel tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  LEARN MORE →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANNOUNCEMENTS ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ScrollIcon size={60} className="animate-float" />
            </div>
            <h2 className="font-cinzel-decorative text-gold-rune text-3xl md:text-4xl font-bold mb-3">
              Proclamations &amp; News
            </h2>
            <div className="divider-rune">
              <span className="text-gold-rune opacity-60">✦</span>
            </div>
            <p className="font-im-fell italic text-parchment-dark opacity-60 mt-3">
              Hear ye! The latest from behind the bar and beyond the dungeon doors.
            </p>
          </div>

          {/* Announcement cards */}
          <div className="space-y-5">
            {announcements.map((ann) => (
              <article
                key={ann.id}
                className={`announcement-card p-6 ${ann.pinned ? "border-gold-rune" : ""}`}
              >
                {ann.pinned && (
                  <div className="absolute top-3 right-4 text-gold-rune text-xs font-cinzel tracking-widest opacity-70">
                    📌 PINNED
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`event-tag font-cinzel ${ann.typeColor}`}>
                    {ann.type}
                  </span>
                  <span className="font-im-fell text-parchment-dark opacity-40 text-sm italic">
                    {ann.date}
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{ann.icon}</span>
                  <div>
                    <h3 className="font-cinzel text-parchment text-lg mb-2 leading-snug">
                      {ann.title}
                    </h3>
                    <p className="font-im-fell text-parchment-dark opacity-70 leading-relaxed">
                      {ann.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="font-cinzel text-sm tracking-widest uppercase text-gold-rune hover:text-gold-bright transition-colors border-b border-gold-rune border-opacity-40 pb-1"
            >
              View All Events &amp; News →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ATMOSPHERE SECTION ────────────────────────────────── */}
      <section className="py-16 px-4 bg-dungeon-mid border-y border-dungeon-purple">
        <div className="max-w-5xl mx-auto text-center">
          <D20Icon size={60} className="mx-auto mb-6 animate-float" />
          <h2 className="font-cinzel-decorative text-gold-rune text-3xl md:text-4xl font-bold mb-4">
            Your Quest Begins Here
          </h2>
          <p className="font-im-fell text-parchment-dark opacity-70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you're a seasoned dungeon master or rolling your first d20, Draughts &amp; Dragons is your home.
            Pull up a chair, order a pint, and let the adventure begin. Our tiefling bartender has a brew
            for every character class — and a tale for every empty glass.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Craft Ales on Tap", value: "24", icon: "🍺" },
              { label: "Mini Brands Stocked", value: "40+", icon: "🗡️" },
              { label: "Events Monthly", value: "15+", icon: "📅" },
              { label: "Happy Adventurers", value: "∞", icon: "🎲" },
            ].map((stat) => (
              <div key={stat.label} className="border-rune rounded-lg p-5 bg-dungeon-dark">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-cinzel-decorative text-gold-rune text-3xl font-black">{stat.value}</div>
                <div className="font-im-fell text-parchment-dark opacity-60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS PREVIEW ───────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cinzel-decorative text-gold-rune text-3xl md:text-4xl font-bold mb-3">
              Upcoming Adventures
            </h2>
            <div className="divider-rune">
              <span className="text-arcane-violet opacity-60">✦</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "MAR 21",
                day: "Saturday",
                title: "Grand Opening Pint Night",
                desc: "Celebrate our opening with half-price pints and live bardic entertainment.",
                tag: "PINT NIGHT",
                tagClass: "bg-tavern-brown text-parchment",
                icon: "🍺",
              },
              {
                date: "MAR 22",
                day: "Sunday",
                title: "Painting Tutorial: Citadel Contrast",
                desc: "Learn contrast paint techniques for striking results in half the time.",
                tag: "WORKSHOP",
                tagClass: "bg-arcane-purple text-parchment",
                icon: "🎨",
              },
              {
                date: "MAR 27",
                day: "Friday",
                title: "Friday Night Magic — Modern",
                desc: "Weekly FNM tournament. Modern format. Prizes awarded. Pre-register required.",
                tag: "TOURNAMENT",
                tagClass: "bg-gold-rune text-dungeon-dark",
                icon: "🃏",
              },
            ].map((event) => (
              <div key={event.title} className="event-card group">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-cinzel text-gold-rune text-xl font-bold">{event.date}</div>
                      <div className="font-im-fell text-parchment-dark opacity-50 text-sm italic">{event.day}</div>
                    </div>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <span className={`event-tag ${event.tagClass} mb-3 inline-block`}>{event.tag}</span>
                  <h3 className="font-cinzel text-parchment text-base mb-2 leading-snug">{event.title}</h3>
                  <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/events"
              className="font-cinzel text-sm tracking-wider uppercase px-8 py-3 rounded
                border border-gold-rune text-gold-rune
                hover:bg-gold-rune hover:text-dungeon-dark transition-all duration-300"
            >
              Full Event Calendar
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
