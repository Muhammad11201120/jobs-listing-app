import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-white bg-gray-900 rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        {/* <!-- Logo --> */}
                        <NavLink
                            className="flex flex-shrink-0 items-center mr-4"
                            to="/"
                        >
                            <img
                                className="h-10 w-auto ml-5"
                                src={logo}
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                وظائف رياكت
                            </span>
                        </NavLink>
                        <div className="ml-auto md:w-full  flex items-center justify-end">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>
                                    <FaHome className="inline ml-2" />
                                    الرئيسية
                                </NavLink>
                                <NavLink to="/jobs" className={linkClass}>
                                    <FaCode className="inline ml-2" />
                                    الوظائف
                                </NavLink>
                                <NavLink to="/add-job" className={linkClass}>
                                    <FaPlus className="inline ml-2" />
                                    وظيفة جديدة{" "}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
