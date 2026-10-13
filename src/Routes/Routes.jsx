import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from '../Page/Layout/Layout';
import Home from '../Page/Home/Home'
import AllProjects from '../Page/Projects/AllProjects';
import Error from "../Page/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: 'projects',
                Component: AllProjects
            },
            {
                path: '/*',
                Component: Error
            }
        ]
    },
]);