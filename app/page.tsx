import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TopPage from "./components/TopPage";

export default function Home() {
  return (
    <div>
      <Header />
      <TopPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
