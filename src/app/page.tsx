import Projects from "@/components/Projects";
import Hero from "../components/Hero";
import Experiences from "@/components/Experience";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main>
      <Resume />
      <Hero />
      <Experiences />
      <Projects />
    </main>
  );
}
