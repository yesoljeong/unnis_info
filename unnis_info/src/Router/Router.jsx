import { createBrowserRouter } from "react-router-dom";
import Info from "../Components/Layout/Info";
import Layout from "../Components/Layout/index";
import Content from "../Components/Layout/Content";
import Homepage from "../Components/MobilePage/Homepage/Homepage";
import Subscribe from "../Components/MobilePage/Subscribe";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                // element: <Homepage/>,
            },
            {
                path: '/:subscribe',
                // element: <Subscribe/>
            }
        ]
    }
])

export default router