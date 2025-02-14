import axios from "axios";
const AxiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});
AxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
AxiosClient.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        try {
            const { response } = error;
            if (response.status === 401) {
                // Added a check for response
                localStorage.removeItem("ACCESS_TOKEN");
                console.log("unAuthorized");
            }
        } catch (error) {
            console.log(error);
        }
        throw error;
    }
);

export default AxiosClient;
