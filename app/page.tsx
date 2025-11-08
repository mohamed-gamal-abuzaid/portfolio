import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TopPage from "./components/TopPage";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <h2 className="text-2xl font-bold mb-4">
          <TopPage />
        </h2>
      </section>
      <section id="about">
        <h2 className="text-2xl font-bold mb-4">
          <About />
        </h2>
      </section>
      <section id="experience">
        <h2 className="text-2xl font-bold mb-4">
          <Projects />
        </h2>
      </section>
      <section id="contact">
        <h2 className="text-2xl font-bold mb-4">
          <Contact />
        </h2>
      </section>
    </div>
  );
}
