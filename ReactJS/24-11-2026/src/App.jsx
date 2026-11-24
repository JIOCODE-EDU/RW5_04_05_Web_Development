import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import PageList from "./pages/PageList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pageRoute = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <PageList.Home />,
      },
      {
        path: "/about",
        element: <PageList.About />,
      },
      {
        path: "/contact",
        element: <PageList.Contact />,
      },
      {
        path: "/feature",
        element: <PageList.Features />,
      },
      {
        path: "/product",
        element: <PageList.Product />,
        children: [
          {
            path: "/product/newproduct",
            element: <PageList.NewProduct />,
          },
          {
            path: "/product/oldproduct",
            element: <PageList.OldProduct />,
          },
        ],
      },
      {
        path: "*",
        element: <PageList.ErrorPage />,
      }
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={pageRoute}></RouterProvider>
    </>
  );
}

export default App;
