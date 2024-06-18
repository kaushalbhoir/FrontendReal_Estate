

import HomePage from "./routes/homepage/homepage";

import {
   createBrowserRouter,
   RouterProvider
 
 } from "react-router-dom";
 import ProfilePage from "./routes/profilePage/profilePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout"
import SinglePage from "./routes/singlepage/singlePage";

function App() {

   const router = createBrowserRouter([
      {
        path: "/",
        element:  <Layout/>,
        children:[
         {

            path:"/",
            element:<HomePage/>
         },
         {
            path:"/list",
            element:<ListPage/>
         },
         {

            path:"/:id",
            element:<SinglePage/>
         }, {

            path:"/profile",
            element:<ProfilePage/>
         }
         ]
      }
    ]);
  return (
    
     
      <RouterProvider router={router}/>
   );
   }

      export default App;