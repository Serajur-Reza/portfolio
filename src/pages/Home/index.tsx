import About from "../../components/About";
import Blogs from "../../components/Blogs";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      {/* <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          <h1>Hello world</h1>
          <h1>Hello world</h1>
        </Grid> */}
      <Intro />
      <About />
      <Element name="Experience" className="element">
        <Experience />
      </Element>

      <Skills />

      <Element name="Projects" className="element">
        <Projects />
      </Element>

      <Element name="Blogs" className="element">
        <Blogs />
      </Element>

      <Contact />
    </>
  );
};

export default Home;
