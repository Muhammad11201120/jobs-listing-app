import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import UnFoundPage from "./pages/UnFoundPage";
import JobPage, { JobLoader } from "./pages/jobPage";
import AddJobPage from "./pages/AddJobPage";
import Register from "./pages/Registraion/Register";
import Login from "./pages/Registraion/Login";
import EditJobPage from "./pages/EditJobPage";
import GuestLayout from "./layouts/GuestLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Profile from "./pages/Profile.jsx";
import "@fontsource/almarai"; // Defaults to weight 400
import "@fontsource/almarai/400.css"; // Specify weight
import MainLayout from "./layouts/MainLayout.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/add-job" element={<AddJobPage />} />
            <Route
                path="/edit-job/:id"
                element={<EditJobPage />}
                loader={JobLoader}
            />
            <Route path="/jobs/:id" element={<JobPage />} loader={JobLoader} />
            <Route path="*" element={<UnFoundPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Route>
    )
);

export default router;
