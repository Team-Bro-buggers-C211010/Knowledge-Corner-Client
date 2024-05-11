import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Register from "../pages/Register/Register";
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
            }
        ]
    }
]);

export default router;