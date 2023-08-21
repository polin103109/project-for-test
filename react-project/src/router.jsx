import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/Signup";
import User from "./views/Users";
const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>

    },
    {
        path:'/signup',
        element:<SignUp/>

    },
    {
        path:'/users',
        element:<User/>

    },
    {
        path:'/profile',
        element:<Login/>

    },
    {
        path:'/admin',
        element:<Login/>

    }



])
export default router;