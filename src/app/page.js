import Image from "next/image";
import Background from "@/components/ui/background";
import { Preview } from "@/components/ui/titletext";
import Introtext from "@/components/introtext";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import Timeline_02 from "@/components/ui/timeline-02";
import CursorEffect from "@/components/ui/cursor-effect";
import FloatingShapes from "@/components/ui/floating-shapes";
import RoleTagline from "@/components/role-tagline";
import SocialLinks from "@/components/social-links";
import DecorativeElements from "@/components/decorative-elements";
import QuickStats from "@/components/quick-stats";
import ProjectsHorizontal from "@/components/ui/projects-horizontal";

export default function Home() {
  return (
    <Background>
      <CursorEffect />
      <AnimatedNavFramer />
      <div className="ml-[2rem] mt-[22rem] md:ml-[4rem] md:mt-[18rem] lg:ml-[6rem] lg:mt-[22rem] mb-32 flex flex-col items-start">
        <Preview photoSize={320} />
        <RoleTagline />
        <Introtext className="mt-6 sm:mt-8" />
        <SocialLinks />
      </div>
      <Timeline_02 />
      <ProjectsHorizontal />
    </Background>

  );
}
