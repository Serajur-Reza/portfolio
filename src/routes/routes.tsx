import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import BlogsPage from "../pages/Blogs";
import SingleBlog from "../pages/Blogs/SingleBlog";
import SingleProject from "../pages/Projects/SingleProject";
import ProjectsPage from "../pages/Projects";

export const router = createBrowserRouter([
  { path: "/", element: <App />, children: [{ path: "", element: <Home /> }] },
  {
    path: "/blogs",
    element: <App />,
    children: [
      { path: "", element: <BlogsPage /> },
      { path: ":id", element: <SingleBlog /> },
    ],
  },
  {
    path: "/projects",
    element: <App />,
    children: [
      { path: "", element: <ProjectsPage /> },
      { path: ":id", element: <SingleProject /> },
    ],
  },
]);
