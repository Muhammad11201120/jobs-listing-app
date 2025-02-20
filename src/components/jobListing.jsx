import {useState} from "react";
import {FaMapMarker} from "react-icons/fa";
import {Link} from "react-router-dom";

const JobListing = ({job}) => {
    const [ShowDescription, setShowDescription] = useState(false);
    let description = job.description;
    if (!ShowDescription) {
        description = description.substring(0, 90) + "...";
    }
    return (
        <div className="bg-gray-200 rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-700 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">{description}</div>
                <button
                    onClick={() => setShowDescription((prev) => !prev)}
                    className="text-gray-700 mb-5 hover:text-gray-900"
                >
                    {ShowDescription ? "أقل" : "المزيد"}
                </button>
                <h3 className="text-gray-700 mb-2">{job.salary}</h3>

                <div className="border border-gray-100 mb-5"></div>
                <hr className="border-gray-300 mb-5"/>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline text-lg mb-1 ml-1"/>
                        {job.location}
                    </div>
                    <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        اقرأ المزيد
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobListing;
