import { useGetSkills } from "../../queryHooks/skills/useGetSkills";

const Skills = () => {
  const { data: skills } = useGetSkills();
  return (
    <>
      <div className="container mx-auto px-4 my-8 animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Skills</h1>
        </div>

        <div className="mt-5  text-justify">
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div>
              {" "}
              <h1 className="text-xl">Core Skills</h1>
              {/* <p className="text-lg">
                HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React,
                Redux, React Query, NextJs
              </p> */}
              <ul className="text-lg">
                {skills?.data?.data[0] &&
                  skills?.data?.data[0]?.core?.map((item: any) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
            <div>
              {" "}
              <h1 className="text-xl">Moderate Skills </h1>
              <ul className="text-lg">
                {skills?.data?.data[0] &&
                  skills?.data?.data[0]?.moderate?.map((item: any) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Academic Info</h1>
        </div>

        <div className="mt-5  text-justify">
          <h1 className="text-2xl">BRAC University</h1>
          <h3 className="text-xl">B.Sc in Computer Science, 2014-2018</h3>
        </div>
      </div>
    </>
  );
};

export default Skills;
