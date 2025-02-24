import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import courseStore from "./store/index.js";
import Courses from "./pages/Courses.jsx";
import Purchases from "./pages/Purchases.jsx";
import Buy from "./pages/Buy.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QuYojCohns11cRimStHfTcfJPVBxVillyO5pvlzmDpVEh4w1TAySlgBajOTlFmNhyBHu5w2jSuGnry6sI4pVRUB007ord3WaY"
);

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/courses", element: <Courses /> },
      { path: "/Buy/:courseId", element: <Buy /> },
      { path: "/purchases", element: <Purchases /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Elements
    stripe={stripePromise}
  >
    <StrictMode>
      <Provider store={courseStore}>
        <RouterProvider router={route}></RouterProvider>
      </Provider>
    </StrictMode>
  </Elements>
);
