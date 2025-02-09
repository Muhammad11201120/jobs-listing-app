import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the path as necessary
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
        </>
    );
};
export default MainLayout;
