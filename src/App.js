import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/detail",
    element: <Detail/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
