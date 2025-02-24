import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminSignup from "./pages/AdminSignup.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import CourseCreate from "./pages/CourseCreate.jsx";
import UpdateCourse from "./pages/UpdateCourse.jsx";
import OurCourses from "./pages/OurCourses.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/", element:<AdminLogin />},
      { path: "/admin/signup", element: <AdminSignup /> },
      { path: "/admin/login", element: <Dashboard /> },
      { path: "/admin/create-course", element: <CourseCreate /> },
      { path: "/admin/update-course/:id", element: <UpdateCourse /> },
      { path: "/admin/our-courses", element: <OurCourses /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
