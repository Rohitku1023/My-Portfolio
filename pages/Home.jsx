import StarBackground from "../src/components/StarBackground";
import ThemeToggle from "../src/components/ThemeToggle";
import Navbar from "../src/components/Navbar";
import HomeSection from "../src/components/HomeSection";
import AboutSection from "../src/components/AboutSection";
import SkillsSection from "../src/components/SkillsSection";
import ProjectsSection from "../src/components/ProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-auto scrollY">
      {/* Theme Toggle*/}

      <ThemeToggle />

      {/* Background Effects */}

      <StarBackground />

      {/*  Navbar*/}

      <Navbar />

      {/* Main Content */}

      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
