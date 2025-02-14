import { Navigate } from "react-router-dom";

const Logout = () => {
    return (
        <div>
            {localStorage.removeItem("ACCESS_TOKEN")}
            <Navigate to="/login" />
        </div>
    );
};

export default Logout;
