import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Project from "./component/Project";

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white font-sans">
        <header>
        <NavBar />
        <Hero />
        </header>
        <main>
        <About />
        <Project />
        <Contact />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
