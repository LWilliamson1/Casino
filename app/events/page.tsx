import Link from "next/link";
import { D20Icon, PaintbrushIcon, CardIcon, GobletIcon, MagicStarIcon, DragonIcon, ScrollIcon } from "@/components/Icons";

type EventCategory = "ALL" | "WORKSHOP" | "TOURNAMENT" | "PINT NIGHT" | "CAMPAIGN" | "COMMUNITY";

interface CalendarEvent {
  id: number;
  date: string;
  dayOfWeek: string;
  month: string;
  title: string;
  time: string;
  category: Exclude<EventCategory, "ALL">;
  desc: string;
  icon: string;
  price: string;
  spots?: string;
  featured?: boolean;
}

const events: CalendarEvent[] = [
  // March 2026
  {
    id: 1,
    date: "21",
    dayOfWeek: "Saturday",
    month: "March",
    title: "Grand Opening — Spring Equinox Pint Night",
    time: "6:00 PM – Close",
    category: "PINT NIGHT",
    desc: "Celebrate our grand opening with half-price pints, live bardic performances, and a special welcome from our tiefling bartender. First 50 guests receive an exclusive commemorative stein.",
    icon: "🐉",
    price: "FREE ENTRY",
    spots: "Open",
    featured: true,
  },
  {
    id: 2,
    date: "22",
    dayOfWeek: "Sunday",
    month: "March",
    title: "Painting Tutorial: Citadel Contrast Paints",
    time: "2:00 PM – 5:00 PM",
    category: "WORKSHOP",
    desc: "Master the art of Contrast paints with our in-house painter. Perfect for beginners and veterans looking to speed up their workflow. All materials provided. Bring a mini or use one of ours.",
    icon: "🎨",
    price: "$15",
    spots: "8 spots left",
  },
  {
    id: 3,
    date: "27",
    dayOfWeek: "Friday",
    month: "March",
    title: "Friday Night Magic — Modern Format",
    time: "7:00 PM – 11:00 PM",
    category: "TOURNAMENT",
    desc: "Weekly FNM tournament running Modern format. Entry fee includes prize store credit. Pre-registration required. Prizes awarded to top 4 players. Proxy-friendly practice pods available before the main event.",
    icon: "🃏",
    price: "$5 Entry",
    spots: "12 spots left",
  },
  {
    id: 4,
    date: "28",
    dayOfWeek: "Saturday",
    month: "March",
    title: "D&D One-Shot: The Sunken Tavern",
    time: "1:00 PM – 6:00 PM",
    category: "CAMPAIGN",
    desc: "A self-contained one-shot adventure for 4–6 players. Pre-generated characters provided. No experience necessary! Dungeon Master: our very own Guildmaster Thorin Ashrock. Ages 16+.",
    icon: "⚔️",
    price: "$20",
    spots: "4 spots left",
  },
  // April 2026
  {
    id: 5,
    date: "3",
    dayOfWeek: "Friday",
    month: "April",
    title: "Friday Night Magic — Pioneer Format",
    time: "7:00 PM – 11:00 PM",
    category: "TOURNAMENT",
    desc: "FNM shifts to Pioneer this week! All players welcome. Sideboards encouraged. Entry includes 1 promo pack.",
    icon: "🃏",
    price: "$5 Entry",
    spots: "16 spots",
  },
  {
    id: 6,
    date: "5",
    dayOfWeek: "Sunday",
    month: "April",
    title: "Pint Night: Local Brewery Tap Takeover",
    time: "5:00 PM – 10:00 PM",
    category: "PINT NIGHT",
    desc: "Misty Mountain Brewery takes over our 6 guest taps for one legendary night. Tasters available. Meet the brewmaster and hear the tales behind each brew.",
    icon: "🍺",
    price: "Pay per pint",
    spots: "Open",
  },
  {
    id: 7,
    date: "10",
    dayOfWeek: "Friday",
    month: "April",
    title: "Friday Night Magic — Commander League Night",
    time: "7:00 PM – Close",
    category: "TOURNAMENT",
    desc: "Monthly Commander league night. Points accumulate over the season. Bring your best 100-card deck. Prizes for game wins, sportsmanship, and most creative deck.",
    icon: "🃏",
    price: "$8 Entry",
    spots: "20 spots",
  },
  {
    id: 8,
    date: "12",
    dayOfWeek: "Sunday",
    month: "April",
    title: "Painting Workshop: OSL (Object Source Lighting)",
    time: "1:00 PM – 4:00 PM",
    category: "WORKSHOP",
    desc: "Advanced technique workshop covering object source lighting — make your minis glow from within! Recommended for painters with at least 6 months experience. Small class of 6.",
    icon: "🎨",
    price: "$20",
    spots: "3 spots left",
  },
  {
    id: 9,
    date: "19",
    dayOfWeek: "Sunday",
    month: "April",
    title: "Pokémon TCG Prerelease — Stellar Crown",
    time: "12:00 PM – 5:00 PM",
    category: "TOURNAMENT",
    desc: "Build and battle with brand new Stellar Crown cards before they hit shelves! Entry includes your prerelease kit. Fun format, prizes for all participants.",
    icon: "⭐",
    price: "$30 Entry",
    spots: "24 spots",
  },
  {
    id: 10,
    date: "26",
    dayOfWeek: "Sunday",
    month: "April",
    title: "Community Game Day — Open Tables",
    time: "11:00 AM – 8:00 PM",
    category: "COMMUNITY",
    desc: "Bring a game, play a game! Our biggest tables are open all day. Board game library is fully accessible. Perfect for trying something new or teaching friends a favourite.",
    icon: "🎲",
    price: "FREE",
    spots: "Open",
  },
  {
    id: 11,
    date: "30",
    dayOfWeek: "Thursday",
    month: "April",
    title: "Painting Tutorial: Basing & Scenery",
    time: "6:30 PM – 8:30 PM",
    category: "WORKSHOP",
    desc: "Elevate your miniatures with stunning bases! Learn scatter grass, water effects, mud, and stone techniques. Materials kit included in price.",
    icon: "🎨",
    price: "$12",
    spots: "10 spots",
  },
  // May 2026
  {
    id: 12,
    date: "4",
    dayOfWeek: "Monday",
    month: "May",
    title: "Adventurer's Pint Night — The May Day Mead",
    time: "6:00 PM – 11:00 PM",
    category: "PINT NIGHT",
    desc: "May Day celebrations! Special mead and seasonal brews on tap. Games provided, stories welcomed. Costumes encouraged.",
    icon: "🍻",
    price: "Pay per pint",
    spots: "Open",
  },
  {
    id: 13,
    date: "16",
    dayOfWeek: "Saturday",
    month: "May",
    title: "Magic: The Gathering — Regional Qualifier",
    time: "10:00 AM – 8:00 PM",
    category: "TOURNAMENT",
    desc: "Compete for a regional qualifier slot! Standard format. Top 8 earn invites to the regional championship. Limited spots. Pre-register now to avoid disappointment.",
    icon: "🃏",
    price: "$25 Entry",
    spots: "32 spots",
    featured: true,
  },
];

const categoryColors: Record<Exclude<EventCategory, "ALL">, string> = {
  WORKSHOP: "bg-arcane-purple text-parchment",
  TOURNAMENT: "bg-gold-rune text-dungeon-dark",
  "PINT NIGHT": "bg-tavern-brown text-parchment",
  CAMPAIGN: "bg-dragon-red text-parchment",
  COMMUNITY: "bg-dungeon-purple text-parchment",
};

const categoryIcons: Record<Exclude<EventCategory, "ALL">, React.ReactNode> = {
  WORKSHOP: <PaintbrushIcon size={20} />,
  TOURNAMENT: <CardIcon size={20} />,
  "PINT NIGHT": <GobletIcon size={20} />,
  CAMPAIGN: <DragonIcon size={20} />,
  COMMUNITY: <D20Icon size={20} />,
};

const months = ["March", "April", "May"];

export default function EventsPage() {
  const groupedEvents = months.map((month) => ({
    month,
    events: events.filter((e) => e.month === month),
  }));

  return (
    <div className="relative overflow-hidden">

      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-dungeon-black" />
        <div className="absolute inset-0 opacity-25"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 30%, #8b1a1a, transparent)" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <ScrollIcon size={70} className="animate-float" />
          </div>
          <h1 className="font-cinzel-decorative text-gold-rune text-4xl md:text-6xl font-black mb-4">
            Event Calendar
          </h1>
          <div className="divider-rune mb-4">
            <span className="text-gold-rune opacity-60">⚜</span>
          </div>
          <p className="font-im-fell italic text-parchment-dark opacity-70 text-lg md:text-xl leading-relaxed">
            Painting workshops, legendary tournaments, pint nights, and campaign evenings.
            Your next adventure is waiting — check the scroll and mark your calendar.
          </p>
        </div>
      </section>

      {/* ─── LEGEND / CATEGORIES ────────────────────────────────── */}
      <section className="py-6 px-4 bg-dungeon-mid border-y border-dungeon-purple">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.entries(categoryColors) as [Exclude<EventCategory, "ALL">, string][]).map(([cat, cls]) => (
              <div key={cat} className={`event-tag flex items-center gap-1.5 py-1.5 px-3 ${cls}`}>
                {categoryIcons[cat]}
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED EVENTS ────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cinzel-decorative text-gold-rune text-2xl font-bold text-center mb-8">
            ✦ Featured Events ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter((e) => e.featured).map((event) => (
              <div
                key={event.id}
                className="event-card border-gold-rune relative overflow-hidden"
                style={{ border: "1px solid rgba(212,175,55,0.5)", boxShadow: "0 0 30px rgba(212,175,55,0.15)" }}
              >
                <div className="absolute top-3 right-3 text-gold-rune text-xs font-cinzel tracking-widest opacity-80 flex items-center gap-1">
                  <MagicStarIcon size={14} /> FEATURED
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-center flex-shrink-0">
                      <div className="font-cinzel-decorative text-gold-rune text-3xl font-black leading-none">
                        {event.date}
                      </div>
                      <div className="font-im-fell text-parchment-dark opacity-50 text-xs">{event.month}</div>
                      <div className="font-im-fell text-parchment-dark opacity-40 text-xs italic">{event.dayOfWeek}</div>
                    </div>
                    <div className="flex-1">
                      <span className={`event-tag text-xs mb-2 inline-block ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                      <h3 className="font-cinzel text-parchment text-lg leading-snug mb-2">{event.title}</h3>
                      <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-dungeon-purple pt-4">
                    <div className="flex gap-4">
                      <span className="font-cinzel text-gold-rune text-sm">{event.price}</span>
                      {event.spots && (
                        <span className="font-im-fell text-parchment-dark opacity-50 text-sm italic">
                          {event.spots}
                        </span>
                      )}
                    </div>
                    <span className="font-im-fell text-parchment-dark opacity-50 text-sm">{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL CALENDAR ──────────────────────────────────────── */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {groupedEvents.map(({ month, events: monthEvents }) => (
            <div key={month}>
              {/* Month header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="font-cinzel-decorative text-gold-rune text-2xl md:text-3xl font-black"
                >
                  {month} 2026
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gold-rune to-transparent opacity-30" />
                <div className="font-cinzel text-xs text-parchment-dark opacity-40 tracking-widest">
                  {monthEvents.length} EVENTS
                </div>
              </div>

              {/* Events list */}
              <div className="space-y-4">
                {monthEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`event-card flex flex-col md:flex-row gap-0 ${
                      event.featured ? "border border-gold-rune border-opacity-40" : ""
                    }`}
                  >
                    {/* Date column */}
                    <div
                      className="md:w-24 flex-shrink-0 flex flex-col items-center justify-center p-4 md:py-6
                        border-b md:border-b-0 md:border-r border-dungeon-purple text-center"
                    >
                      <div className="font-cinzel-decorative text-gold-rune text-3xl font-black leading-none">
                        {event.date}
                      </div>
                      <div className="font-im-fell text-parchment-dark opacity-40 text-xs mt-1 italic">
                        {event.dayOfWeek.slice(0, 3)}
                      </div>
                      <div className="text-xl mt-2">{event.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`event-tag text-xs ${categoryColors[event.category]}`}>
                          {event.category}
                        </span>
                        <span className="font-im-fell text-parchment-dark opacity-40 text-xs italic">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="font-cinzel text-parchment text-base md:text-lg mb-2 leading-snug">
                        {event.title}
                        {event.featured && (
                          <span className="ml-2 text-gold-rune text-xs font-im-fell">★ Featured</span>
                        )}
                      </h3>
                      <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed">
                        {event.desc}
                      </p>
                    </div>

                    {/* Price / RSVP */}
                    <div className="md:w-36 flex-shrink-0 flex flex-col items-center justify-center p-4
                      border-t md:border-t-0 md:border-l border-dungeon-purple text-center gap-2">
                      <div className="font-cinzel text-gold-rune text-sm font-bold">{event.price}</div>
                      {event.spots && (
                        <div className="font-im-fell text-parchment-dark opacity-50 text-xs italic">
                          {event.spots}
                        </div>
                      )}
                      <button
                        className="mt-1 font-cinzel text-xs tracking-wider uppercase px-3 py-1.5 rounded
                          border border-arcane-violet text-arcane-violet
                          hover:bg-arcane-violet hover:text-parchment transition-all duration-300"
                      >
                        RSVP
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOOKING CTA ────────────────────────────────────────── */}
      <section id="book" className="py-16 px-4 bg-dungeon-mid border-y border-dungeon-purple">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <MagicStarIcon size={60} className="mx-auto mb-4 animate-float" />
            <h2 className="font-cinzel-decorative text-gold-rune text-3xl font-bold mb-3">
              Host Your Own Event
            </h2>
            <div className="divider-rune mb-4">
              <span className="text-gold-rune opacity-60">✦</span>
            </div>
            <p className="font-im-fell italic text-parchment-dark opacity-70 text-lg max-w-2xl mx-auto leading-relaxed">
              Book our private event spaces for campaigns, tournaments, birthday quests, corporate adventures,
              or any gathering worthy of legend. Our innkeeper will work with you to craft the perfect evening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "⚔️",
                title: "Campaign Night",
                desc: "Private room for your ongoing campaign. DM screen, terrain, and immersive lighting included.",
                price: "From $50 / session",
              },
              {
                icon: "🎂",
                title: "Birthday Quest",
                desc: "Celebrate in style! Custom theming, group discount on food & drinks, and a dedicated host.",
                price: "From $120 / event",
              },
              {
                icon: "🏢",
                title: "Corporate Adventure",
                desc: "Team-building through tabletop gaming. Facilitated sessions available for up to 24 staff.",
                price: "From $300 / event",
              },
            ].map((pkg) => (
              <div key={pkg.title} className="border-rune rounded-xl p-6 text-center bg-dungeon-dark">
                <div className="text-3xl mb-3">{pkg.icon}</div>
                <h3 className="font-cinzel text-gold-rune text-base mb-2">{pkg.title}</h3>
                <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed mb-3">
                  {pkg.desc}
                </p>
                <div className="font-cinzel text-arcane-violet text-sm">{pkg.price}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:events@draughtsndragons.com"
              className="font-cinzel text-sm tracking-wider uppercase px-8 py-3.5 rounded
                bg-gold-rune text-dungeon-dark font-bold
                hover:bg-gold-bright transition-all duration-300
                shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Enquire Now
            </a>
            <Link
              href="/offerings#event-space"
              className="font-cinzel text-sm tracking-wider uppercase px-8 py-3.5 rounded
                border border-parchment text-parchment-dark
                hover:bg-parchment hover:text-dungeon-dark transition-all duration-300"
            >
              View Spaces
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RECURRING EVENTS ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cinzel-decorative text-gold-rune text-3xl font-bold mb-3">
              Weekly Traditions
            </h2>
            <p className="font-im-fell italic text-parchment-dark opacity-60">
              These sacred rituals recur on their appointed days — mark them in your grimoire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <PaintbrushIcon size={44} />,
                day: "Sunday",
                time: "Varies",
                title: "Painting Tutorials",
                desc: "Monthly workshops covering beginner through advanced miniature painting techniques. All skill levels welcome. Check the calendar for specific topics.",
                tag: "WORKSHOP",
                tagClass: "bg-arcane-purple text-parchment",
                accentColor: "#9b4dca",
              },
              {
                icon: <CardIcon size={44} />,
                day: "Every Friday",
                time: "7:00 PM",
                title: "Friday Night Magic",
                desc: "The legendary weekly FNM. Format rotates monthly between Standard, Pioneer, Modern, and Commander. Entry includes a promo card and chance at store credit prizes.",
                tag: "TOURNAMENT",
                tagClass: "bg-gold-rune text-dungeon-dark",
                accentColor: "#d4af37",
              },
              {
                icon: <GobletIcon size={44} />,
                day: "Monthly",
                time: "Evening",
                title: "Pint Night",
                desc: "Gather round! Monthly pint nights celebrate local craft brews, seasonal specials, and community bonding. Sometimes themed, always legendary. Watch announcements for dates.",
                tag: "PINT NIGHT",
                tagClass: "bg-tavern-brown text-parchment",
                accentColor: "#8b5e3c",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="event-card p-6 text-center"
                style={{ borderColor: `${item.accentColor}40` }}
              >
                <div
                  className="rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center border-2"
                  style={{
                    borderColor: item.accentColor,
                    background: "rgba(13,10,14,0.5)",
                    boxShadow: `0 0 20px ${item.accentColor}30`,
                  }}
                >
                  {item.icon}
                </div>
                <span className={`event-tag text-xs mb-3 inline-block ${item.tagClass}`}>{item.tag}</span>
                <div className="font-cinzel text-xs tracking-widest mb-1" style={{ color: item.accentColor }}>
                  {item.day} · {item.time}
                </div>
                <h3 className="font-cinzel text-parchment text-lg mb-3">{item.title}</h3>
                <p className="font-im-fell text-parchment-dark opacity-60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
