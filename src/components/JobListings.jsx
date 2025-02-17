import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import AxiosClient from "../AxiosClient";
const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = () => {
        AxiosClient.get("/jobs")
            .then(({ data }) => {
                setJobs(data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <section className="bg-white px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "وظائف حديثة" : "جميع الوظائف"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
