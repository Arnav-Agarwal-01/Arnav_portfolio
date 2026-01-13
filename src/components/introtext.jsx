import { Open_Sans } from "next/font/google"

const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function Introtext({ className = "" }) {
    return (
        <section className={`${opensans.className} ${className}`}>
            <p className="text-black/80 text-md sm:text-md md:text-lg lg:text-3xl leading-relaxed max-w-3xl md:-translate-y-38 md:translate-x-5">
                Welcome to my corner of the internet!.
            </p>
        </section>
    )
}