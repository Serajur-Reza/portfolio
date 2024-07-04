const Intro = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-8">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div>
            <p>Hello, I am </p>
            <h1 className="relative w-[max-content]  text-2xl text-blue-600 before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
              Serajur Reza Chowdhury
            </h1>
            <p>and I am a</p>
            <h3 className="text-xl">Software Engineer</h3>
            <p className="text-xl">
              with a focus on frontend, with knowledge of backend.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1tGXYPTncfP4u3jv0RVUcBWslpCo1YH4k/view",
                  "_blank"
                )
              }
            >
              See my Resume
            </button>
          </div>

          <div className="flex justify-end ">
            <img
              className="w-[600px] h-[300px]"
              src="https://img.freepik.com/free-photo/pink-potted-plant-with-laptop-wooden-table_23-2147920628.jpg?w=1380&t=st=1719598406~exp=1719599006~hmac=eece9725fa2c05d6c743020c8eb3c409557996cf736aaaf87cc8f2ee43c6309e"
              alt="laptop"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
