import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        <ProfileCard />
        <Skills />
        <Projects />
        <Work />
      </main>
    </>
  );
}
