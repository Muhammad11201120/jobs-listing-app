import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const navigator = useNavigate();
    const user = localStorage.getItem("USER");
    return user ? <Outlet /> : navigator("/login");
};

export default ProtectedRoutes;
