import Hero from "@/components/hero";
import Grid from "@/components/grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/recent-projects";
import { navItems } from "@/data";
import Clients from "@/components/clients";
import Work from "@/components/work";
import Approach from "@/components/approach";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects/>
        <Clients />
        <Work />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
