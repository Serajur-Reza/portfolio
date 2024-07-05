import { Link } from "react-router-dom";
import { useGetBlogs } from "../../queryHooks/blogs/useGetBlogs";
import dayjs from "dayjs";
import parse from "html-react-parser";

const Blogs = () => {
  const { data: blogs } = useGetBlogs();
  console.log(blogs?.data?.data);

  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Blogs</h1>
        </div>

        <div className="mt-5">
          <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {blogs?.data?.data?.slice(0, 3)?.map((item: any) => (
              <div className="w-full mx-auto group sm:max-w-sm">
                <Link to={`/blogs/${item?._id}`}>
                  <img
                    src={
                      "https://lh3.googleusercontent.com/a/ACg8ocKhOcP9rnWyVrZqlEubp3q8AmVUz6G73QnngpfLKcDziJJZLq26=s288-c-no"
                    }
                    loading="lazy"
                    alt={"thumbnail"}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {item?.title}
                    </h3>
                    <span className="block text-indigo-600 text-sm">
                      {dayjs(item?.start_date).format("DD-MMMM-YYYY")}
                    </span>

                    <p className="text-gray-600 text-md duration-150 group-hover:text-gray-800 blog-text">
                      {parse(String(item?.description))}
                    </p>
                  </div>
                </Link>
              </div>
            ))}{" "}
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link to="/blogs">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blogs;
