"use client";

interface IconProps {
  className?: string;
  size?: number;
}

export function D20Icon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="#2d1f3d" stroke="#d4af37" strokeWidth="2" />
      <polygon points="50,5 95,30 50,40" fill="#4a2d6e" stroke="#d4af37" strokeWidth="1" />
      <polygon points="50,40 95,30 95,70" fill="#3d2555" stroke="#d4af37" strokeWidth="1" />
      <polygon points="50,40 95,70 50,95" fill="#4a2d6e" stroke="#d4af37" strokeWidth="1" />
      <polygon points="50,40 50,95 5,70" fill="#3d2555" stroke="#d4af37" strokeWidth="1" />
      <polygon points="50,40 5,70 5,30" fill="#4a2d6e" stroke="#d4af37" strokeWidth="1" />
      <polygon points="50,40 5,30 50,5" fill="#3d2555" stroke="#d4af37" strokeWidth="1" />
      <text x="50" y="65" textAnchor="middle" fill="#d4af37" fontSize="22" fontWeight="bold" fontFamily="serif">20</text>
    </svg>
  );
}

export function DragonIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Body */}
      <ellipse cx="50" cy="60" rx="22" ry="14" fill="#8b1a1a" />
      {/* Head */}
      <ellipse cx="72" cy="45" rx="14" ry="10" fill="#8b1a1a" />
      {/* Snout */}
      <ellipse cx="84" cy="48" rx="8" ry="6" fill="#a02020" />
      {/* Eye */}
      <circle cx="76" cy="42" r="3" fill="#f0c040" />
      <circle cx="76" cy="42" r="1.5" fill="#1a0000" />
      {/* Nostril */}
      <circle cx="88" cy="46" r="1.5" fill="#6b1010" />
      {/* Teeth */}
      <polygon points="82,52 84,58 86,52" fill="#e8d5a3" />
      {/* Wing left */}
      <path d="M42 52 Q20 35 15 20 Q30 28 38 42 Q40 35 35 22 Q48 30 44 50 Z" fill="#6b1010" opacity="0.9" />
      {/* Wing veins */}
      <line x1="42" y1="52" x2="18" y2="23" stroke="#a02020" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="46" x2="36" y2="25" stroke="#a02020" strokeWidth="1" opacity="0.5" />
      {/* Tail */}
      <path d="M30 62 Q15 68 10 78 Q18 70 20 80 Q12 75 8 85" fill="none" stroke="#8b1a1a" strokeWidth="5" strokeLinecap="round" />
      {/* Tail spike */}
      <polygon points="6,87 10,80 14,86" fill="#6b1010" />
      {/* Legs */}
      <path d="M48 72 Q45 80 40 85" stroke="#7a1a1a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M58 72 Q60 80 65 85" stroke="#7a1a1a" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Claws */}
      <path d="M38 85 Q36 88 34 87 M40 86 Q39 90 37 90" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Fire breath */}
      <path d="M90 50 Q96 45 98 40 Q94 48 98 52 Q93 48 92 55 Z" fill="#e07020" opacity="0.8" />
      <path d="M90 50 Q98 50 100 47 Q96 52 100 56 Q94 52 91 57 Z" fill="#f0c040" opacity="0.6" />
    </svg>
  );
}

export function ShieldIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 5 L90 20 L90 55 Q90 80 50 95 Q10 80 10 55 L10 20 Z" fill="#2d1f3d" stroke="#d4af37" strokeWidth="2" />
      <path d="M50 12 L83 25 L83 55 Q83 75 50 88 Q17 75 17 55 L17 25 Z" fill="#3d2555" />
      {/* Cross */}
      <rect x="46" y="25" width="8" height="40" fill="#d4af37" rx="1" />
      <rect x="30" y="40" width="40" height="8" fill="#d4af37" rx="1" />
    </svg>
  );
}

export function ScrollIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Scroll body */}
      <rect x="20" y="15" width="60" height="70" rx="4" fill="#f5e6c8" />
      {/* Top roll */}
      <ellipse cx="50" cy="15" rx="30" ry="8" fill="#e8d5a3" stroke="#c4a882" strokeWidth="1" />
      {/* Bottom roll */}
      <ellipse cx="50" cy="85" rx="30" ry="8" fill="#e8d5a3" stroke="#c4a882" strokeWidth="1" />
      {/* Roll shadows */}
      <ellipse cx="50" cy="15" rx="28" ry="5" fill="#d4b896" />
      <ellipse cx="50" cy="85" rx="28" ry="5" fill="#d4b896" />
      {/* Text lines */}
      <line x1="30" y1="32" x2="70" y2="32" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="42" x2="70" y2="42" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="52" x2="60" y2="52" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="62" x2="65" y2="62" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="72" x2="55" y2="72" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
      {/* Wax seal */}
      <circle cx="50" cy="52" r="10" fill="#8b1a1a" opacity="0.15" />
      {/* Rod ends */}
      <circle cx="20" cy="15" r="5" fill="#8b6914" />
      <circle cx="80" cy="15" r="5" fill="#8b6914" />
      <circle cx="20" cy="85" r="5" fill="#8b6914" />
      <circle cx="80" cy="85" r="5" fill="#8b6914" />
    </svg>
  );
}

export function GobletIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cup */}
      <path d="M25 10 L35 65 Q35 75 50 75 Q65 75 65 65 L75 10 Z" fill="#d4af37" />
      <path d="M25 10 L35 65 Q35 75 50 75 Q65 75 65 65 L75 10 Z" fill="url(#gobletFill)" opacity="0.3" />
      {/* Rim */}
      <ellipse cx="50" cy="10" rx="25" ry="6" fill="#f0c040" />
      {/* Drink */}
      <path d="M28 20 L36 60 Q37 68 50 68 Q63 68 64 60 L72 20 Z" fill="#4a0e0e" opacity="0.85" />
      {/* Foam */}
      <ellipse cx="50" cy="20" rx="22" ry="5" fill="#e8d5a3" opacity="0.9" />
      {/* Stem */}
      <rect x="45" y="75" width="10" height="15" fill="#d4af37" />
      {/* Base */}
      <ellipse cx="50" cy="90" rx="20" ry="5" fill="#d4af37" />
      <ellipse cx="50" cy="88" rx="18" ry="3.5" fill="#f0c040" />
      {/* Shine */}
      <line x1="60" y1="15" x2="62" y2="55" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <defs>
        <linearGradient id="gobletFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SwordIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Blade */}
      <polygon points="50,5 55,70 50,78 45,70" fill="#c0c0c0" />
      {/* Blade edge highlight */}
      <line x1="50" y1="5" x2="53" y2="68" stroke="white" strokeWidth="1" opacity="0.6" />
      {/* Guard */}
      <rect x="30" y="68" width="40" height="8" rx="2" fill="#d4af37" />
      {/* Handle */}
      <rect x="46" y="76" width="8" height="18" rx="2" fill="#5c3a1e" />
      {/* Handle wrap */}
      <line x1="46" y1="80" x2="54" y2="80" stroke="#8b6914" strokeWidth="1.5" />
      <line x1="46" y1="84" x2="54" y2="84" stroke="#8b6914" strokeWidth="1.5" />
      <line x1="46" y1="88" x2="54" y2="88" stroke="#8b6914" strokeWidth="1.5" />
      {/* Pommel */}
      <circle cx="50" cy="97" r="5" fill="#d4af37" />
    </svg>
  );
}

export function MagicStarIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer star points */}
      <polygon
        points="50,5 61,35 92,35 68,55 77,85 50,67 23,85 32,55 8,35 39,35"
        fill="#4a2d6e"
        stroke="#9b4dca"
        strokeWidth="1.5"
        filter="url(#starGlow)"
      />
      {/* Inner glow */}
      <polygon
        points="50,15 59,38 84,38 64,53 72,78 50,63 28,78 36,53 16,38 41,38"
        fill="#7b2d8b"
        opacity="0.6"
      />
      {/* Center */}
      <circle cx="50" cy="50" r="12" fill="#d4af37" filter="url(#starGlow)" />
      <circle cx="50" cy="50" r="8" fill="#f0c040" />
    </svg>
  );
}

export function PaintbrushIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Handle */}
      <rect x="44" y="5" width="12" height="55" rx="4" fill="#8b5e3c" />
      {/* Ferrule */}
      <rect x="42" y="55" width="16" height="10" rx="2" fill="#c0c0c0" />
      {/* Bristles */}
      <path d="M42 65 Q50 62 58 65 L55 88 Q50 92 45 88 Z" fill="#c0392b" />
      {/* Paint drip */}
      <path d="M50 88 Q48 93 50 96 Q52 93 50 88" fill="#c0392b" opacity="0.7" />
      {/* Handle detail */}
      <line x1="44" y1="20" x2="56" y2="20" stroke="#6b4423" strokeWidth="1" />
      <line x1="44" y1="30" x2="56" y2="30" stroke="#6b4423" strokeWidth="1" />
    </svg>
  );
}

export function CardIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Back card */}
      <rect x="20" y="10" width="55" height="80" rx="6" fill="#1a1020" stroke="#4a2d6e" strokeWidth="1.5" transform="rotate(-8 47 50)" />
      {/* Front card */}
      <rect x="25" y="10" width="55" height="80" rx="6" fill="#f5e6c8" stroke="#d4af37" strokeWidth="1.5" />
      {/* Card inner border */}
      <rect x="29" y="14" width="47" height="72" rx="4" fill="none" stroke="#d4af37" strokeWidth="0.5" />
      {/* Card suit - dragon symbol */}
      <text x="52" y="52" textAnchor="middle" fill="#8b1a1a" fontSize="28" fontFamily="serif">♦</text>
      {/* Corner pips */}
      <text x="33" y="26" fill="#8b1a1a" fontSize="10" fontFamily="serif">A</text>
      <text x="67" y="85" fill="#8b1a1a" fontSize="10" fontFamily="serif" transform="rotate(180 67 85)">A</text>
    </svg>
  );
}
