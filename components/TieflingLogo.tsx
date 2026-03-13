"use client";

interface TieflingLogoProps {
  size?: number;
  className?: string;
}

export default function TieflingLogo({ size = 120, className = "" }: TieflingLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Draughts & Dragons - Tiefling Bartender Logo"
    >
      <defs>
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#c0392b" />
          <stop offset="60%" stopColor="#922b21" />
          <stop offset="100%" stopColor="#641e16" />
        </radialGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0c040" />
          <stop offset="100%" stopColor="#e07020" />
        </radialGradient>
        <radialGradient id="gobletGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f0c040" />
          <stop offset="100%" stopColor="#8b6914" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="eyeGlowFilter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#2d0a4e" />
        </linearGradient>
        <linearGradient id="vestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d1f3d" />
          <stop offset="100%" stopColor="#1a0d2e" />
        </linearGradient>
        <linearGradient id="apronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d2b1f" />
          <stop offset="100%" stopColor="#2a1a0f" />
        </linearGradient>
        <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#922b21" />
          <stop offset="100%" stopColor="#641e16" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="100" cy="100" r="96" />
        </clipPath>
      </defs>

      {/* Background circle */}
      <circle cx="100" cy="100" r="98" fill="#0d0a0e" />
      <circle cx="100" cy="100" r="96" fill="#1a1020" />
      <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="1.5" />

      {/* Inner decorative ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#4a2d6e" strokeWidth="0.5" strokeDasharray="4,3" />

      {/* Corner rune marks */}
      <text x="18" y="28" fill="#d4af37" fontSize="10" opacity="0.6" fontFamily="serif">✦</text>
      <text x="174" y="28" fill="#d4af37" fontSize="10" opacity="0.6" fontFamily="serif">✦</text>
      <text x="18" y="182" fill="#d4af37" fontSize="10" opacity="0.6" fontFamily="serif">✦</text>
      <text x="174" y="182" fill="#d4af37" fontSize="10" opacity="0.6" fontFamily="serif">✦</text>

      <g clipPath="url(#circleClip)">

        {/* Torso / Apron */}
        <rect x="62" y="138" width="76" height="70" rx="4" fill="url(#apronGrad)" />
        {/* Apron strings */}
        <line x1="100" y1="142" x2="76" y2="150" stroke="#5c3a1e" strokeWidth="1.5" />
        <line x1="100" y1="142" x2="124" y2="150" stroke="#5c3a1e" strokeWidth="1.5" />
        {/* Apron pocket */}
        <rect x="88" y="158" width="24" height="16" rx="2" fill="#2a1a0f" stroke="#5c3a1e" strokeWidth="0.5" />

        {/* Vest / Shirt */}
        <path d="M65 145 Q100 135 135 145 L140 200 L60 200 Z" fill="url(#vestGrad)" />
        {/* Vest lapels */}
        <path d="M100 145 L85 160 L85 200 L100 195 Z" fill="#3d2540" />
        <path d="M100 145 L115 160 L115 200 L100 195 Z" fill="#3d2540" />
        {/* Shirt collar */}
        <path d="M88 145 L100 155 L112 145" fill="none" stroke="#e8d5a3" strokeWidth="1.5" />
        {/* Vest buttons */}
        <circle cx="100" cy="170" r="2" fill="#d4af37" />
        <circle cx="100" cy="180" r="2" fill="#d4af37" />
        <circle cx="100" cy="190" r="2" fill="#d4af37" />

        {/* Left arm holding goblet */}
        <path d="M65 148 Q45 155 40 175 Q38 185 42 195" stroke="url(#skinGrad)" strokeWidth="14" fill="none" strokeLinecap="round" />
        {/* Sleeve left */}
        <path d="M65 148 Q50 155 46 170" stroke="#2d1f3d" strokeWidth="15" fill="none" strokeLinecap="round" />
        <path d="M65 148 Q50 155 46 170" stroke="#3d2b4e" strokeWidth="13" fill="none" strokeLinecap="round" />

        {/* Right arm (gesturing/resting) */}
        <path d="M135 148 Q155 155 158 172 Q160 182 156 192" stroke="url(#skinGrad)" strokeWidth="14" fill="none" strokeLinecap="round" />
        {/* Sleeve right */}
        <path d="M135 148 Q150 155 152 170" stroke="#2d1f3d" strokeWidth="15" fill="none" strokeLinecap="round" />
        <path d="M135 148 Q150 155 152 170" stroke="#3d2b4e" strokeWidth="13" fill="none" strokeLinecap="round" />

        {/* Left Hand */}
        <ellipse cx="42" cy="195" rx="8" ry="6" fill="url(#skinGrad)" />

        {/* Right Hand */}
        <ellipse cx="156" cy="192" rx="8" ry="6" fill="url(#skinGrad)" />

        {/* Goblet in left hand */}
        {/* Cup */}
        <path d="M26 178 L28 192 Q28 196 34 196 Q40 196 40 192 L42 178 Z" fill="url(#gobletGrad)" />
        {/* Goblet rim */}
        <ellipse cx="34" cy="178" rx="9" ry="3" fill="#f0c040" />
        {/* Goblet stem */}
        <rect x="32" y="196" width="4" height="8" fill="url(#gobletGrad)" />
        {/* Goblet base */}
        <ellipse cx="34" cy="204" rx="7" ry="2.5" fill="#d4af37" />
        {/* Drink inside */}
        <path d="M27 183 L28 192 Q28 196 34 196 Q40 196 40 192 L41 183 Z" fill="#4a0e0e" opacity="0.8" />
        {/* Foam/head */}
        <ellipse cx="34" cy="183" rx="7" ry="2.5" fill="#e8d5a3" opacity="0.9" />
        {/* Goblet shine */}
        <line x1="36" y1="180" x2="37" y2="190" stroke="white" strokeWidth="1" opacity="0.4" />

        {/* Tail */}
        <path d="M108 200 Q115 185 120 178 Q130 165 125 155 Q120 145 115 150"
          fill="none" stroke="url(#tailGrad)" strokeWidth="6" strokeLinecap="round" />
        {/* Tail tip (arrowhead) */}
        <polygon points="113,148 118,153 108,152" fill="#641e16" />

        {/* NECK */}
        <rect x="91" y="123" width="18" height="22" rx="4" fill="url(#skinGrad)" />

        {/* HEAD */}
        <ellipse cx="100" cy="105" rx="34" ry="38" fill="url(#skinGrad)" />

        {/* HORNS - curved ram-style */}
        {/* Left horn */}
        <path d="M74 82 Q62 55 72 45 Q82 35 86 50 Q82 60 80 72"
          fill="none" stroke="#3d2b1f" strokeWidth="9" strokeLinecap="round" />
        <path d="M74 82 Q62 55 72 45 Q82 35 86 50 Q82 60 80 72"
          fill="none" stroke="#2a1a0f" strokeWidth="7" strokeLinecap="round" />
        {/* Horn highlight */}
        <path d="M74 80 Q64 57 73 47" fill="none" stroke="#5c3a1e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* Right horn */}
        <path d="M126 82 Q138 55 128 45 Q118 35 114 50 Q118 60 120 72"
          fill="none" stroke="#3d2b1f" strokeWidth="9" strokeLinecap="round" />
        <path d="M126 82 Q138 55 128 45 Q118 35 114 50 Q118 60 120 72"
          fill="none" stroke="#2a1a0f" strokeWidth="7" strokeLinecap="round" />
        {/* Horn highlight */}
        <path d="M126 80 Q136 57 127 47" fill="none" stroke="#5c3a1e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* HAIR - wild dark hair */}
        <path d="M68 88 Q65 70 70 58 Q80 35 100 32 Q120 35 130 58 Q135 70 132 88"
          fill="url(#hairGrad)" />
        {/* Hair strands */}
        <path d="M68 88 Q60 78 62 65 Q66 52 72 48" fill="url(#hairGrad)" />
        <path d="M132 88 Q140 78 138 65 Q134 52 128 48" fill="url(#hairGrad)" />
        <path d="M70 85 Q62 72 65 60" fill="none" stroke="#2d0a4e" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 78 Q72 65 75 55" fill="none" stroke="#2d0a4e" strokeWidth="2" strokeLinecap="round" />
        <path d="M130 85 Q138 72 135 60" fill="none" stroke="#2d0a4e" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 78 Q128 65 125 55" fill="none" stroke="#2d0a4e" strokeWidth="2" strokeLinecap="round" />

        {/* FACE FEATURES */}

        {/* Eyebrows - arched, dark */}
        <path d="M80 95 Q87 90 94 93" fill="none" stroke="#1a0a0a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M120 95 Q113 90 106 93" fill="none" stroke="#1a0a0a" strokeWidth="2.5" strokeLinecap="round" />

        {/* Eyes - glowing gold/amber */}
        <ellipse cx="87" cy="100" rx="8" ry="6" fill="#1a0a0a" />
        <ellipse cx="113" cy="100" rx="8" ry="6" fill="#1a0a0a" />
        {/* Iris */}
        <ellipse cx="87" cy="100" rx="5" ry="5" fill="url(#eyeGlow)" filter="url(#eyeGlowFilter)" />
        <ellipse cx="113" cy="100" rx="5" ry="5" fill="url(#eyeGlow)" filter="url(#eyeGlowFilter)" />
        {/* Pupils - slit-like (cat/tiefling style) */}
        <ellipse cx="87" cy="100" rx="1.5" ry="4" fill="#1a0000" />
        <ellipse cx="113" cy="100" rx="1.5" ry="4" fill="#1a0000" />
        {/* Eye shine */}
        <circle cx="89" cy="98" r="1.2" fill="white" opacity="0.7" />
        <circle cx="115" cy="98" r="1.2" fill="white" opacity="0.7" />

        {/* Nose */}
        <path d="M97 108 Q100 112 103 108" fill="none" stroke="#7a1f1f" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="95" cy="110" r="2" fill="#7a1f1f" opacity="0.5" />
        <circle cx="105" cy="110" r="2" fill="#7a1f1f" opacity="0.5" />

        {/* Smile / slight smirk */}
        <path d="M88 120 Q100 130 112 120" fill="none" stroke="#6b1a1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M88 120 Q100 129 112 120" fill="#8b1a1a" opacity="0.3" />

        {/* Small fangs */}
        <polygon points="95,122 97,128 99,122" fill="#e8d5a3" opacity="0.9" />
        <polygon points="101,122 103,128 105,122" fill="#e8d5a3" opacity="0.9" />

        {/* Facial detail - subtle cheek shadow */}
        <ellipse cx="78" cy="110" rx="8" ry="5" fill="#7a1f1f" opacity="0.2" />
        <ellipse cx="122" cy="110" rx="8" ry="5" fill="#7a1f1f" opacity="0.2" />

        {/* EARS - slightly pointed */}
        <path d="M66 100 Q60 96 62 88 Q68 85 72 90 Q70 96 68 100 Z" fill="url(#skinGrad)" />
        <path d="M134 100 Q140 96 138 88 Q132 85 128 90 Q130 96 132 100 Z" fill="url(#skinGrad)" />

        {/* Small stud earring */}
        <circle cx="65" cy="98" r="2.5" fill="#d4af37" filter="url(#glow)" />
        <circle cx="135" cy="98" r="2.5" fill="#d4af37" filter="url(#glow)" />

        {/* BARTENDER HAT - stylized dark cap */}
        <ellipse cx="100" cy="72" rx="36" ry="6" fill="#1a0820" />
        <rect x="70" y="48" width="60" height="25" rx="4" fill="#1a0820" />
        {/* Hat band */}
        <rect x="70" y="65" width="60" height="6" rx="1" fill="#d4af37" opacity="0.8" />
        {/* Hat gem */}
        <path d="M96 68 L100 63 L104 68 L100 71 Z" fill="#9b4dca" filter="url(#glow)" />

      </g>

      {/* Outer gold ring */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="#d4af37" strokeWidth="2" />

      {/* Rune decorations on ring */}
      <text x="100" y="10" textAnchor="middle" fill="#d4af37" fontSize="8" opacity="0.7" fontFamily="serif">⚜</text>
      <text x="190" y="103" textAnchor="middle" fill="#d4af37" fontSize="8" opacity="0.7" fontFamily="serif">⚜</text>
      <text x="10" y="103" textAnchor="middle" fill="#d4af37" fontSize="8" opacity="0.7" fontFamily="serif">⚜</text>
      <text x="100" y="197" textAnchor="middle" fill="#d4af37" fontSize="8" opacity="0.7" fontFamily="serif">⚜</text>
    </svg>
  );
}
