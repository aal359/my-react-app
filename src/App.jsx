import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Experiences from "./components/Experiences.jsx";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Profile />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;
