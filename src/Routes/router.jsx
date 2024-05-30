import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import AddBooks from "../pages/AddBooks/AddBooks";
import PrivateRoutes from "./PrivateRoutes";
import Updated from "../pages/Updated/Updated";
import AllBooks from "../pages/AllBooks/AllBooks";
import ViewDetails from './../pages/ViewDetails/ViewDetails';
import BorrowedPage from "../pages/BorrowedPage/BorrowedPage";
import BookCategory from "../pages/BookCategory/BookCategory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/register",
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/add-book",
                element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/update-book/:bookName",
                element: <PrivateRoutes><Updated></Updated></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/all-books",
                element: <AllBooks></AllBooks>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/view-details/:bookName",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/borrow-books",
                element: <PrivateRoutes><BorrowedPage></BorrowedPage></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/category/:categoryName",
                element: <PrivateRoutes><BookCategory></BookCategory></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/my-profile/:profileName",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

export default router;