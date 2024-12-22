import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import AddLostFoundItems from "../pages/AddLostFoundItems/AddLostFoundItems";

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
                path:"/add-lost-found-item",
                element:<PrivateRoutes><AddLostFoundItems></AddLostFoundItems></PrivateRoutes>
            }
        ]

    },
    {
        path:"*",
        element:<Error></Error>
    }
])