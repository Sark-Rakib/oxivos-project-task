import { createBrowserRouter } from "react-router";
import Root from "../Component/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products-details/:id",
        Component: ProductDetails,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);
