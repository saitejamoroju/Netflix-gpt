import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GPT_App_Routes from "./Routes";

import Error from "./Error";
import Practice from "./Practice";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: GPT_App_Routes.home,
      element: <Login />,
    },
    {
      path: GPT_App_Routes.browse,
      element: <Browse />,
    },
    {
      path: GPT_App_Routes.error,
      element: <Error />,
    },
    {
      path: GPT_App_Routes.Practice,
      element: <Practice />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
