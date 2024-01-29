import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Sponsors from './Pages/Sponsors/Sponsors.jsx';
import Certificate from './Pages/Certificate/Certificate.jsx';
import Volunteer from './Pages/Volunteer/Volunteer.jsx';
import SearchCertificate from './Pages/Certificate/SearchCertificate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/sponsor",
        element: <Sponsors></Sponsors>,
      },
      {
        path: "/volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "/certificate/",
        element: <SearchCertificate></SearchCertificate>,
      },
      {
        path: "/certificate/:id",
        element:<Certificate></Certificate> ,
        loader:({params})=>fetch(`http://localhost:1010/certificate/${params.id}`)
        
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
