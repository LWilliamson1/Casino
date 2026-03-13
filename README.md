# Draughts & Dragons 🐉🍺

> A fantasy-themed bar and TTRPG retail space — where adventurers gather, tales are told, and the ale flows as freely as the magic.

## About

**Draughts & Dragons** is a themed bar and tabletop RPG retail space application built with Next.js 14, TypeScript, and Tailwind CSS. The design draws inspiration from Dungeons & Dragons aesthetics with a dark fantasy tavern atmosphere.

## Features

### 🏠 Home Page — The Tavern
- Pinned announcements and news
- Upcoming event previews
- Hero section with animated tiefling bartender logo
- Stats showcase

### ⚔️ Offerings — Our Wares
- **Private Event Space** — The Dragon's Den
- **Miniatures & Terrain** — The Armoury (Reaper, GW, 3D printed)
- **Paints & Supplies** — The Alchemist's Bench (Citadel, Vallejo, Scale75)
- **Board Games** — The Game Vault (1,000+ titles)
- **Trading Card Games** — The Card Sanctum (MTG, Pokemon, Yu-Gi-Oh!, F&B, Lorcana)
- **The Enchanted Bar** — 24 craft ales on draught

### 📅 Events Calendar
- Painting Tutorials (OSL, Contrast Paints, Basing)
- Friday Night Magic (Standard, Pioneer, Modern, Commander)
- Monthly Pint Nights & Tap Takeovers
- D&D One-Shots & Campaign Nights
- Community Game Days
- TCG Pre-Releases & Regional Qualifiers

## Design System

- **Dark fantasy aesthetic** — deep purples, dungeon blacks, parchment golds
- **Custom SVG tiefling bartender logo** with glowing eyes, curved horns, and goblet
- **D&D-inspired iconography** — D20, dragons, shields, scrolls, goblets, swords
- **Fonts**: Cinzel Decorative (headings), IM Fell English (body text)
- **Animations**: torch flicker, arcane float, gold shimmer

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom D&D theme
- **Icons**: Custom SVG components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the tavern.

## Project Structure

```
app/
  layout.tsx          # Root layout with Header & Footer
  page.tsx            # Home -- announcements & hero
  offerings/
    page.tsx          # Wares & services
  events/
    page.tsx          # Event calendar
components/
  TieflingLogo.tsx    # Custom SVG tiefling bartender logo
  Icons.tsx           # D&D-themed SVG icon components
  Header.tsx          # Navigation header
  Footer.tsx          # Site footer
app/globals.css       # Global D&D-themed styles
```

---

*May your rolls be ever in your favor.* 🎲
