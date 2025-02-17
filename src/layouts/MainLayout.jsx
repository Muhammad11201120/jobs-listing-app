import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CircularNavBar from "../components/CircularNavBar";

const MainLayout = () => {
    return (
        <>
            <CircularNavBar />
            <Outlet />
            <ToastContainer />
        </>
    );
};
export default MainLayout;
