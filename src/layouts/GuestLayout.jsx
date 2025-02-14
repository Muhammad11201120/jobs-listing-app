import { useStateContext } from "../contexts/ContextProvider.jsx";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
const GuestLayout = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <MainLayout />
        </>
    );
};
export default GuestLayout;
