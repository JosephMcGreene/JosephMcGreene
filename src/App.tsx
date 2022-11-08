import Header from "./Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Joseph McGreene</h1>
      <Projects />
      <Contact />
      <About />
    </div>
  );
};

export default App;
