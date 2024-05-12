import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import AddBooks from "../pages/AddBooks/AddBooks";
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
                element: <AddBooks></AddBooks>
            }
        ]
    }
]);

export default router;