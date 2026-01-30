import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectList } from "@/components/project-list";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProjectList />
      <Footer />
    </main>
  );
}
