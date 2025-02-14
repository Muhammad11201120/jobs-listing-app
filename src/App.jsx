/* import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "@fontsource/almarai"; // Defaults to weight 400
import "@fontsource/almarai/400.css"; // Specify weight

const App = () => {
    const AddJob = async (job) => {
        //ADD NEW JOB
        const res = await fetch("http://127.0.0.1:8000/api/joblistings", {
            method: "POST",
            body: JSON.stringify(job),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!res.ok) console.log(res.statusText);
    };
    //DELETE JOB
    const DeleteJob = async (jobId) => {
        const res = await fetch(
            `http://127.0.0.1:8000/api/joblistings/${jobId}`,
            { method: "DELETE" }
        );
        if (!res.ok) console.log(res.statusText);
    };
    //EditJob
    const EditJob = async (job) => {
        const res = await fetch(
            `http://127.0.0.1:8000/api/joblistings/${job.id}`,
            {
                method: "PUT",
                body: JSON.stringify(job),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );
        if (!res.ok) console.log(res.statusText);
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<GuestLayout />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route
                        path="/jobs/:jobId"
                        element={<JobPage deleteJob={DeleteJob} />}
                        loader={JobLoader}
                    />
                    <Route
                        path="/edit-job/:jobId"
                        element={<EditJobPage EditJob={EditJob} />}
                        loader={JobLoader}
                    />
                    <Route
                        path="/add-job"
                        element={<AddJobPage AddJobSubmit={AddJob} />}
                    />
                    <Route path="*" element={<UnFoundPage />} />
                </Route>
            </>
        )
    );

};

export default App;
 */
