import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/Signup";
const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>

    },
    {
        path:'/registration',
        element:<SignUp/>

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