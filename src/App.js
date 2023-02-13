import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HarryPotter from "./components/HarryPotter";
import IndianHistory from "./components/IndianHistory";
import Javascript from "./components/Javascript";
import Crypto from "./components/Crypto";
import Root from "./pages/Root";

import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "Javascript",
        element: <Javascript />,
        errorElement: <Error />,
      },
      {
        path: "IndianHistory",
        element: <IndianHistory />,
        errorElement: <Error />,
      },
      {
        path: "HarryPotter",
        element: <HarryPotter />,
        errorElement: <Error />,
      },
      {
        path: "Crypto",
        element: <Crypto />,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
