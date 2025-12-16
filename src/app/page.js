import Image from "next/image";
import Background from "@/components/ui/background";
import { Preview } from "@/components/ui/titletext";




export default function Home() {
  return (
    <Background>
      <div className={`absolute top-0 left-0 text-white text-[8rem] sm:text-[12rem] leading-none `}>
        <Preview/>
      </div>
    </Background>
  );
}
