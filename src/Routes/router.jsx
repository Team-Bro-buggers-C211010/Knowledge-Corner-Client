import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import AddBooks from "../pages/AddBooks/AddBooks";
import PrivateRoutes from "./PrivateRoutes";
import Updated from "../pages/Updated/Updated";
import AllBooks from "../pages/AllBooks/AllBooks";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/add-book",
                element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
            },
            {
                path: "/update-book/:bookName",
                element: <PrivateRoutes><Updated></Updated></PrivateRoutes>
            },
            {
                path: "/all-books",
                element: <AllBooks></AllBooks>,
            }
        ]
    }
]);

export default router;