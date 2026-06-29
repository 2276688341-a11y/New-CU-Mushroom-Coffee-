/**
 * Atmospheric SVG art — pure grayscale, dark-background-optimized.
 * White/light elements create depth on dark charcoal surfaces.
 */

interface AtmosphereImageProps {
  variant: "fog" | "texture" | "light";
  opacity?: number;
}

export function AtmosphereImage({
  variant,
  opacity = 0.4,
}: AtmosphereImageProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {variant === "fog" && <FogSVG />}
      {variant === "texture" && <TextureSVG />}
      {variant === "light" && <LightSVG />}

      {/* Edge vignette — darken edges toward bg color */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(38,38,38,0.6) 70%, rgba(38,38,38,0.95) 95%)",
        }}
      />
    </div>
  );
}

/** White mist/fog masses — atmospheric depth on dark bg */
function FogSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="fgBlurLg">
          <feGaussianBlur stdDeviation="80" />
        </filter>
        <filter id="fgBlurMd">
          <feGaussianBlur stdDeviation="50" />
        </filter>
        <filter id="fgBlurSm">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
      <ellipse cx="200" cy="300" rx="500" ry="350" fill="#ffffff" opacity="0.06" filter="url(#fgBlurLg)" />
      <ellipse cx="950" cy="500" rx="450" ry="300" fill="#f0f0f0" opacity="0.05" filter="url(#fgBlurMd)" />
      <ellipse cx="550" cy="200" rx="350" ry="200" fill="#ffffff" opacity="0.04" filter="url(#fgBlurSm)" />
      <ellipse cx="700" cy="650" rx="400" ry="250" fill="#e0e0e0" opacity="0.05" filter="url(#fgBlurMd)" />
    </svg>
  );
}

/** Fine grain texture + subtle light mass for tactile depth */
function TextureSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="txNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.08" />
          </feComponentTransfer>
        </filter>
        <filter id="txBlur">
          <feGaussianBlur stdDeviation="100" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#txNoise)" />
      <ellipse cx="600" cy="400" rx="700" ry="450" fill="#ffffff" opacity="0.04" filter="url(#txBlur)" />
    </svg>
  );
}

/** White geometric lines + soft glow — structure/clarity on dark bg */
function LightSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="ltBlurLg">
          <feGaussianBlur stdDeviation="70" />
        </filter>
      </defs>
      {/* White geometric lines */}
      <line x1="100" y1="200" x2="500" y2="200" stroke="#ffffff" strokeWidth="0.5" opacity="0.12" />
      <line x1="700" y1="350" x2="1100" y2="350" stroke="#ffffff" strokeWidth="0.5" opacity="0.10" />
      <line x1="150" y1="550" x2="450" y2="550" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
      <line x1="650" y1="600" x2="1050" y2="600" stroke="#ffffff" strokeWidth="0.5" opacity="0.07" />
      {/* Soft light mass */}
      <ellipse cx="600" cy="400" rx="500" ry="350" fill="#ffffff" opacity="0.05" filter="url(#ltBlurLg)" />
    </svg>
  );
}
