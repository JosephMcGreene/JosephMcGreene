import "./scss/App.scss";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

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
    <div>
      {/* <h1 className="page-title">I'm Joseph McGreene</h1> */}
      <Header />
      <Heading text={pageHeading} /> {/* "I'm Joseph McGreene" */}
      <Projects />
      <Contact />
      <About />
    </div>
  );
}
