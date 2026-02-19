import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch("./furnitureData.json")
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: WishList,
      },
    ],
  },
]);

export default router;
