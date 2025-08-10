import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from "./Home"
import Login from './Login';
import Feed from './Feed';
import Profile from './Profile'

const Body = () => {
    const appRouter = createBrowserRouter([
              {
            path:"/",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Home/>,
            children:[
              {
                path:"/home",
                element:<Feed/>
              },
              {
                path:"/home/profile/:id",
                element:<Profile/>
              }
            ]
        }

    ])
  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body