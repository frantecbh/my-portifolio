import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projetos } from "./components/Projetos";
import { Skills } from "./components/Skills";

export default function App() {
  return (
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projetos />
    <Contact />
  </div>

  )
}