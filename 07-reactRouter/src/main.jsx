import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx"
// const checkRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home/> },
//       { path: "about", element: <About/> },
//       {path: "contact", element: <Contact/>}
//     ],
//   },
// ]);

const checkRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>} />
      <Route path= "contact" element={<Contact/>} />
      <Route path="user/:userId" element={ <User/> } />
      <Route 
      path="github" 
      element={ <Github/> } 
      loader={githubInfoLoader}
      />
      
    </Route>
  )
)


console.log(RouterProvider);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={checkRouter} />
  </StrictMode>
);
