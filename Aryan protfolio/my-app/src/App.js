import "./App.css";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Project from "./components/Project";
function App() {
  return (
    <div>
      <Profile />
      <Services />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
