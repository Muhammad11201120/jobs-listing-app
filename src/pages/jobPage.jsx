import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {FaArrowRight, FaMapMarker} from "react-icons/fa";
import {toast} from "react-toastify";
import {useStateContext} from "../contexts/ContextProvider.jsx";

const JobPage = () => {

    const {user} = useStateContext()
    let job = {};
    const navigate = useNavigate();
    job = useLoaderData();
    const DeleteJob = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/jobs/${job.id}`, {
            method: "DELETE",
        }).then((res) => {
            console.log(res);
            toast.success("تم الحذف بنجاح");
            navigate("/jobs");
        }).catch((err) => {
            console.log(err);
            toast.error(err.message);
            navigate("/jobs");
        });
    };
    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6 mt-20">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex flex-col items-center"
                    >
                        <FaArrowRight className="ml-2"/> العودة للوظائف
                    </Link>
                </div>
            </section>

            <section>
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-right">
                                <div className="text-gray-500 mb-4">
                                    {job.type}
                                </div>
                                <h1 className="  text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className="text-orange-700 ml-1"/>
                                    <p className="text-orange-700">
                                        {job.location}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    معلومات الوظيفة
                                </h3>

                                <p className="mb-4">{job.description}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                                    المرتب
                                </h3>

                                <p className="mb-4">{job.salary} / سنويا</p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">
                                    معلومات الشركة
                                </h3>

                                <h2 className="text-2xl">{job.company_name}</h2>

                                <p className="my-2">
                                    {job.company_description}
                                </p>

                                <hr className="my-4"/>

                                <h3 className="text-xl"> البريد الإلكتروني:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company_email}
                                </p>

                                <h3 className="text-xl">الهاتف:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {" "}
                                    {job.company_phone}
                                </p>
                            </div>

                            {user.id === job.user_id ? (<div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">
                                    إدارة الوظيفة
                                </h3>
                                <Link
                                    to={`/edit-job/${job.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    تعديل الوظيفة
                                </Link>
                                <button
                                    onClick={() => onDeleteClick(job.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    حذف الوظيفة
                                </button>
                            </div>) : ''}
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );

    function onDeleteClick(id) {
        if (!window.confirm("هل أنت متأكد من حذف هذه الوظيفة؟")) {
            return;
        }
        DeleteJob(id);

    }
};
const JobLoader = async ({params}) => {

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/jobs/${params.id}`);
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
};
export {JobPage as default, JobLoader};
