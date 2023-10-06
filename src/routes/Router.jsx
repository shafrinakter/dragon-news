import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainlayOut/MainLayOut";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Career from "../page/career/Career";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import NewsDetails from "../page/newsDetails/NewsDetails";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json'),
            },
            {   
                path: '/newsdetail/:_id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader: ()=>fetch('/news.json')
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;