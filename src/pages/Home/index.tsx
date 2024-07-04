import About from "../../components/About";
import Blogs from "../../components/Blogs";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Home = () => {
  return (
    <>
      {/* <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          <h1>Hello world</h1>
          <h1>Hello world</h1>
        </Grid> */}
      <Intro />
      <About />
      <Experience />
      <Skills />

      <Projects />
      <Blogs />

      <Contact />
    </>
  );
};

export default Home;
