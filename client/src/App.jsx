import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./pages/ProductList";
import Product from "./pages/product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const params = new URLSearchParams(location.search);
  console.log(params);

  const tx_ref = params.get("tx_ref");
  console.log(tx_ref);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/sign-up",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/sign-in",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
