'use client'
import { useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { VariableFontHoverByRandomLetter } from "@/components/ui/variable-font-hover-by-random-letter"


const outfit = Outfit({
  subsets: ["latin"]
});


function Preview({ photoSrc = "/profile.jpg", photoSize = 280 }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const onEnter = () => setHover(true);
  const onLeave = () => setHover(false);
  const onMove = (e) => {
    setPos({ x: e.clientX + 24, y: e.clientY + 24 });
  };

  return (
    <div className="relative text-black">
      {/* Hover-follow photo (shown only while hovering) */}
      {photoSrc ? (
        <div
          className="fixed z-50 pointer-events-none transition-opacity duration-150 ease-out"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            opacity: hover ? 1 : 0,
          }}
          aria-hidden="true"
        >
          {imgError ? (
            // Fallback to a native <img> if next/image fails to load/optimize
            <img
              src={photoSrc}
              width={photoSize}
              height={photoSize}
              alt="Profile preview"
              style={{ display: "block" }}
              className="rounded-3xl shadow-xl ring-1 ring-white/10"
            />
          ) : (
            <Image
              src={photoSrc}
              alt="Profile preview"
              width={photoSize}
              height={photoSize}
              priority
              unoptimized
              sizes={`${photoSize}px`}
              onError={() => setImgError(true)}
              className="rounded-3xl shadow-xl ring-1 ring-black/10"
            />
          )}
        </div>
      ) : null}

      <div className="flex items-start justify-start" onMouseEnter={onEnter} onMouseLeave={onLeave} onMouseMove={onMove}>
        <VariableFontHoverByRandomLetter
          label="ARNAV AGARWAL"
          staggerDuration={0.03}
          className={`flex justify-start cursor-pointer align-text-top md:-translate-y-38 md:translate-x-5 ${outfit.className} text-[2rem] sm:text-[2rem] md:text-[6rem] lg:text-[9rem]`}
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' 0"
        />
      </div>
    </div>
  )
}

export { Preview }
