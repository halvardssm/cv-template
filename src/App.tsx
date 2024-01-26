import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";

function App() {
  return (
    <section id="content" className="sheet padding-10mm">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
    </section>
  );
}

export default App;
