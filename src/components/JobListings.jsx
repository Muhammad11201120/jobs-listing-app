import JobListing from "./jobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/joblistings"
                );
                const data = await response.json();
                setJobs(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);
    const recent = [...jobs];
    if (isHome) {
        recent.splice(Math.max(recent.length - 5, 1));
    }

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "وظائف حديثة" : "جميع الوظائف"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recent.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
