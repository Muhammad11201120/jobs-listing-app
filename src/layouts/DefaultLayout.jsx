import { useStateContext } from "../contexts/ContextProvider.jsx";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import { useEffect } from "react";
import AxiosClient from "../AxiosClient.jsx";
const DefaultLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    useEffect(() => {
        AxiosClient.get("").then(({ data }) => {
            setUser(data);
        });
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <MainLayout />
        </>
    );
};
export default DefaultLayout;
