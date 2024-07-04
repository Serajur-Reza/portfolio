const Blogs = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Blogs</h1>
        </div>

        <div className="mt-5">
          <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            <div className="w-full mx-auto group sm:max-w-sm">
              <a href={"#"}>
                <img
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocKhOcP9rnWyVrZqlEubp3q8AmVUz6G73QnngpfLKcDziJJZLq26=s288-c-no"
                  }
                  loading="lazy"
                  alt={"items.title"}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    26/06/2024
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    Radioactive
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    Radioactive
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1tGXYPTncfP4u3jv0RVUcBWslpCo1YH4k/view",
                "_blank"
              )
            }
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
