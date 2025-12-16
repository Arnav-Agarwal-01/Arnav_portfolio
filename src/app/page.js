import Image from "next/image";
import Background from "@/components/ui/background";

export default function Home() {
  return (
    <Background>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-white text-4xl">
            ARNAV AGARWAL
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </Background>
  );
}
