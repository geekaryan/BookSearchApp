import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HarryPotter from "./components/HarryPotter";
import IndianHistory from "./components/IndianHistory";
import Javascript from "./components/Javascript";
import Crypto from "./components/Crypto";
import Root from "./pages/Root";

import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";

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
      },
      {
        path: "IndianHistory",
        element: <IndianHistory />,
      },
      {
        path: "HarryPotter",
        element: <HarryPotter />,
      },
      {
        path: "Crypto",
        element: <Crypto />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
