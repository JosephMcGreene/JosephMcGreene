import "./css/App.scss";
import IntroHeading from "./components/IntroHeading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <IntroHeading />

      <main>
        <Projects />
        <Contact />
        <About />
      </main>

      <Footer />
    </>
  );
}
