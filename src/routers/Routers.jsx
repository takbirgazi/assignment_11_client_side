import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import RoomDeatiels from "../pages/Rooms/RoomDeatiels";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
          loader: ()=>fetch(`${import.meta.env.VITE_API}/rooms`)
        },
        {
          path: "/bookings",
          element: <MyBookings></MyBookings>
        },
        {
            path:'/rooms/:id',
            element: <RoomDeatiels></RoomDeatiels>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API}/rooms/${params.id}`)
        }
      ]
    },
  ]);


export default router;