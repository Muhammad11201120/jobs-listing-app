import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaCode, FaHome, FaArrowCircleLeft, FaUser } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AxiosClient from "../AxiosClient";
const Navbar = () => {
    const { user, token, setUser, setToken } = useStateContext();
    const navigator = useNavigate();
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-white bg-gray-900 rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    const onLogout = () => {
        AxiosClient.get("/logout").then(({}) => {
            setUser(null);
            setToken(null);
            toast.success("تمت تسجيل الخروج بنجاح");
            return navigator("/login");
        });
    };
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-start md:justify-between">
                    <div className="flex flex-1 items-center justify-start lg:items-stretch lg:justify-center">
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
                                ويب ستاك
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
                                {token !== null ? (
                                    <>
                                        <NavLink
                                            to="/profile"
                                            className={linkClass}
                                        >
                                            <FaUser className="inline ml-2" />
                                            {user.name}
                                        </NavLink>
                                        <button
                                            onClick={onLogout}
                                            className={
                                                "text-red-700 cursor-pointer hover:text-red-800"
                                            }
                                        >
                                            <FaArrowCircleLeft className="inline ml-2" />
                                            تسجيل الخروج
                                        </button>
                                    </>
                                ) : (
                                    <NavLink
                                        className={linkClass}
                                        to={"/login"}
                                    >
                                        <FaUser className="inline ml-2" />
                                        تسجيل الدخول
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
