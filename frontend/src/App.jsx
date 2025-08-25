import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Products from "./Page/Products/Products";
import Resources from "./Page/Resources/Resources";
import Leadership from "./Page/Leadership/Leadership";
import Board from "./Page/Board/Board";
import Services from "./Page/Services/Services";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/Resources",
        element: <Resources />,
      },
      {
        path: "/Leadership",
        element: <Leadership />,
      },
      {
        path: "/Board",
        element: <Board />,
      },
      {
        path: "/Services",
        element: <Services />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
