import "./scss/App.scss";
import Header from "./components/Header";
import IntroHeading from "./components/IntroHeading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const pageHeading = [
    "I",
    "'",
    "m",
    " ",
    "J",
    "o",
    "s",
    "e",
    "p",
    "h",
    " ",
    "M",
    "c",
    "G",
    "r",
    "e",
    "e",
    "n",
    "e",
  ];

  return (
    <>
      <Header />
      <IntroHeading text={pageHeading} /> {/* "I'm Joseph McGreene" */}
      <Projects />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
