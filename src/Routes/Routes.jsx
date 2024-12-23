import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import AddLostFoundItems from "../pages/AddLostFoundItems/AddLostFoundItems";
import LostFoundItems from "../pages/LostFoundItems/LostFoundItems";
import AboutUs from "../pages/AboutUs/AboutUs";
import ManageMyItems from "../pages/ManageMyItems/ManageMyItems";
import UpdateMyLostFoundItems from "../pages/UpdateMyLostFoundItems/UpdateMyLostFoundItems";
import Loader from "../pages/Loader/Loader";
import LostFoundDetails from "../pages/LostFoundDetails/LostFoundDetails";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Registration></Registration>

            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/aboutus",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/add-lost-found-item",
                element:<PrivateRoutes><AddLostFoundItems></AddLostFoundItems></PrivateRoutes>
            },
            {
                path:"/lost-found-items",
                element:<LostFoundItems></LostFoundItems>
            },
            {
                path:"/my-lost-found-items",
                element:<PrivateRoutes><ManageMyItems></ManageMyItems></PrivateRoutes>
            },
            {
                path:"/update/:id",
                element:<PrivateRoutes><UpdateMyLostFoundItems></UpdateMyLostFoundItems></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/lost-found-items/${params.id}`)
            },
           {
             path:"/details/:i",
             element:<PrivateRoutes><LostFoundDetails></LostFoundDetails></PrivateRoutes>,
             loader:({params})=>fetch(`http://localhost:5000/lost-found-items/${params.id}`)
           }

           
        ]

    },
    {
        path:"*",
        element:<Error></Error>
    }
])