import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
