import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import RoomDeatiels from "../pages/Rooms/RoomDeatiels";
import PrivetRoute from "./PrivetRoute";
import Review from "../pages/Review/Review";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch(`${import.meta.env.VITE_API}/rooms`)
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
          // loader: ()=>fetch(`${import.meta.env.VITE_API}/rooms`)
        },
        {
          path: "/booking/:email",
          element: <PrivetRoute><MyBookings></MyBookings></PrivetRoute>,
          loader:({params})=> fetch(`${import.meta.env.VITE_API}/booking/${params.email}`)
        },
        {
            path:'/rooms/:id',
            element: <PrivetRoute><RoomDeatiels></RoomDeatiels></PrivetRoute>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API}/rooms/${params.id}`)
        },
        {
          path: 'review',
          element: <Review></Review>
        }
      ]
    },
  ]);


export default router;