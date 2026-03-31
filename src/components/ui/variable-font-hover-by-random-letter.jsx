import { useMemo } from "react"
import { motion } from "framer-motion";

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const VariableFontHoverByRandomLetter = ({
  label,
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 900, 'slnt' -10",

  transition = {
    type: "spring",
    duration: 0.7,
  },

  staggerDuration = 0.03,
  className,
  onClick,
  ...props
}) => {
  const shuffledIndices = useMemo(() => {
    const indices = Array.from({ length: label.length }, (_, i) => i)
    shuffleArray(indices)
    return indices
  }, [label])

  const letterVariants = {
    hover: (index) => ({
      fontVariationSettings: toFontVariationSettings,
      transition: {
        ...transition,
        delay: staggerDuration * index,
      },
    }),
    initial: (index) => ({
      fontVariationSettings: fromFontVariationSettings,
      transition: {
        ...transition,
        delay: staggerDuration * index,
      },
    }),
  }

  // Split label into words for word-level wrapping
  const words = label.split(" ")
  let charIndex = 0

  return (
    <motion.span
      className={`${className}`}
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      {...props}>
      <span className="sr-only">{label}</span>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("").map((letter, letterIdx) => {
          const globalIdx = charIndex++
          const index = shuffledIndices[globalIdx]
          return (
            <motion.span
              key={globalIdx}
              className="inline-block"
              aria-hidden="true"
              variants={letterVariants}
              custom={index}>
              {letter}
            </motion.span>
          )
        })
        // Add space between words (count it as a character for stagger)
        if (wordIdx < words.length - 1) {
          const spaceIdx = charIndex++
          const spaceIndex = shuffledIndices[spaceIdx]
          wordChars.push(
            <motion.span
              key={`space-${spaceIdx}`}
              className="inline-block"
              aria-hidden="true"
              variants={letterVariants}
              custom={spaceIndex}>
              {"\u00A0"}
            </motion.span>
          )
        }
        return (
          <span key={wordIdx} className="inline-flex whitespace-nowrap">
            {wordChars}
          </span>
        )
      })}
    </motion.span>
  );
}

export { VariableFontHoverByRandomLetter }
