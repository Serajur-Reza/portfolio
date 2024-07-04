const Skills = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-8 animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Skills</h1>
        </div>

        <div className="mt-5  text-justify">
          <div className="flex">
            {" "}
            <h1 className="text-xl">Core Skills </h1>
            <span> - </span>
            <p className="text-lg">
              HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React,
              Redux, React Query, NextJs
            </p>
          </div>
          <div className="flex">
            {" "}
            <h1 className="text-xl">Moderate Skills </h1> <span> - </span>
            <p className="text-lg">
              Vue, Nodejs, Express, MongoDB, Firebase, React Native
            </p>
          </div>
          <div className="flex">
            <h1 className="text-xl">Other Skills </h1> <span> - </span>
            <p className="text-lg"> VS Code, Git</p>
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
