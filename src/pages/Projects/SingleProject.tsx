import { useParams } from "react-router-dom";

import { useSingleProject } from "../../queryHooks/projects/useSingleProject";

const SingleProject = () => {
  const { id } = useParams();
  console.log(id);
  const { data: project } = useSingleProject(id as string);

  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="mt-5">
          <h1 className="text-justify font-bold text-2xl">
            {project?.data?.data?.name}
          </h1>
          <h3 className="text-sm">live: {project?.data?.data?.live}</h3>
          <h3 className="text-sm">
            front end github repo: {project?.data?.data?.front}
          </h3>
          <h3 className="text-sm">
            back end github repo: {project?.data?.data?.back}
          </h3>
        </div>

        <div className="mt-5">
          <div className="text-justify text-lg">
            {project?.data?.data?.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
