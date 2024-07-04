import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

export const router = createBrowserRouter([
  { path: "/", element: <App />, children: [{ path: "", element: <Home /> }] },
  {
    path: "/blog",
    element: <App />,
    children: [
      { path: "", element: <h2>single blog</h2> },
      { path: ":id", element: <h2>double blog</h2> },
    ],
  },
  {
    path: "/projects",
    element: <App />,
    children: [{ path: ":id", element: <h2>double project</h2> }],
  },
]);
