import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
          {
            path: '/',
            element: <Home></Home>,
          },
        ]
    },
    {
        path: "*",
        element: (
          <div className="pt-16 block m-auto text-center">
            <h1 className='text-6xl text-amber-400 font-bold'>404</h1>
            <h1 className="text-5xl">Sorry Page not Found</h1>
            <button className="btn btn-square loading mt-5 bg-amber-400"></button>
          </div>
        ),
      }
])