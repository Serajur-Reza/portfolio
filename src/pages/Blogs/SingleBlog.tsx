import { useParams } from "react-router-dom";
import { useSingleBlog } from "../../queryHooks/blogs/useSingleBlog";
import parse from "html-react-parser";
import dayjs from "dayjs";

const SingleBlog = () => {
  const { id } = useParams();
  console.log(id);
  const { data: blog } = useSingleBlog(id as string);

  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="mt-5">
          <h1 className="text-justify font-bold text-2xl">
            {blog?.data?.data?.title}
          </h1>
          <h3 className="text-sm">
            published in :{" "}
            {dayjs(blog?.data?.data?.createdAt).format("DD-MMMM-YYYY")}
          </h3>
        </div>

        <div className="mt-5">
          <div className="text-justify text-lg">
            {parse(String(blog?.data?.data?.description))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
