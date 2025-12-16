'use client'
import { Outfit } from "next/font/google";
import { VariableFontHoverByRandomLetter } from "@/components/ui/variable-font-hover-by-random-letter"


const outfit = Outfit({ 
  subsets: ["latin"]
});


function Preview() {
  return (
    <div className="w-full h-full rounded-lg items-start justify-start bg-gradient-to-br text-white pt-83 pl-4 sm:pt-75 sm:pl-8 md:pt-58 md:pl-19">
      <div className="w-full h-full items-start justify-start flex">
        <VariableFontHoverByRandomLetter
          label="ARNAV AGARWAL"
          staggerDuration={0.03}
          className={`items-start flex justify-start cursor-pointer align-text-top text-[2rem] sm:text-[4.3rem] md:text-[9rem] ${outfit.className}`}
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' 0"
        />
      </div>
    </div>
  )
}

export { Preview }
