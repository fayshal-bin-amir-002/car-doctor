import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookService from "../pages/BookService";
import Bookings from "../pages/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book-service/:id",
        element: <BookService></BookService>,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);

export default router;