import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {" "}
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Contact</h1>
        </div>

        <div className="mt-5">
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            {" "}
            <div>
              <h1 className="mb-5">Have your say</h1>

              <div className="relative max-w-xs mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <div className="relative max-w-xs mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <div className="relative max-w-xs mb-5">
                <textarea
                  placeholder="Enter your message"
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>

              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tGXYPTncfP4u3jv0RVUcBWslpCo1YH4k/view",
                    "_blank"
                  )
                }
              >
                Send Message
              </button>
            </div>
            <div>
              <h1 className="mb-2">Connect with me</h1>
              <div className="flex gap-3">
                <div
                  className="mt-4 bg-blue-600 text-white p-3 rounded-lg cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1tGXYPTncfP4u3jv0RVUcBWslpCo1YH4k/view",
                      "_blank"
                    )
                  }
                >
                  <FaGithub />{" "}
                </div>
                <div
                  className="mt-4 bg-blue-600 text-white p-3 rounded-lg cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1tGXYPTncfP4u3jv0RVUcBWslpCo1YH4k/view",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin />{" "}
                </div>
              </div>

              <div className="mt-5">
                <h1>My email</h1>
                <h3>rezainfinity54@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
