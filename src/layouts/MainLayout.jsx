import {Outlet} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import CircularNavBar from "../components/CircularNavBar";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <CircularNavBar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </>
    );
};
export default MainLayout;
