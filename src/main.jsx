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
import VolunteerCard from './Pages/Volunteer/VolunteerCard.jsx';
import Arcive from './Pages/Arcive/Arcive.jsx';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx';
import Gest from './Pages/Gest/Gest.jsx';
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
        path: "/volunteer/:url",
        element: <VolunteerCard></VolunteerCard> ,
        loader:({params})=>fetch(`https://ubf-server.vercel.app/volunteer/${params.url}`)
        
      },
      {
        path: "/certificate/:id",
        element:<Certificate></Certificate> ,
        loader:({params})=>fetch(`https://ubf-server.vercel.app/certificate/${params.id}`)
        
      },
      {
        path:"/certificate",
        element: <SearchCertificate></SearchCertificate>
      },
      {
        path:"/arcive",
        element: <Arcive></Arcive>
      },
      {
        path:"/gest",
        element: <Gest></Gest>
      },
      
    ]
  },
  {
    path:"/*",
    element: <NotFoundPage></NotFoundPage>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
