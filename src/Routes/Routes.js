import { createBrowserRouter } from "react-router-dom"
import Main from '../Layout/Main/Main'
import Home from '../Pages/Home/Home'
import Courses from '../Pages/Courses/Courses'
import Course from '../Pages/Shared/Course/Course'
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import FAQ from "../Pages/FAQ/FAG";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Shared/Details/Details"
import Purchase from '../Pages/Purchase/Purchase'
import Error from '../Pages/Error/Error'
import Terms from '../Pages/Terms/Terms'
import PrivateRoute from './PrivateRoute'
import Restricted from './Restricted'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/details',
                element: <Details></Details>,
                children: [
                    {
                        path: '/details/:id',
                        element: <Course></Course>,
                        loader: ({ params }) => {
                            return fetch(`http://localhost:5000/details/${params.id}`)
                        }
                    }
                ]
            },
            {
                path: '/purchase',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>
            },
            {
                path: '/login',
                element: <Restricted><Login></Login></Restricted>
            },
            {
                path: '/register',
                element: <Restricted><Register></Register></Restricted>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])