import {useLoaderData, useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import {useStateContext} from "../contexts/ContextProvider";

const EditJobPage = () => {
    const {user} = useStateContext();

    let job;
    job = useLoaderData();
    const navigator = useNavigate();
    const [updatedJob, setUpdatedJob] = useState({
        id: job.id,
        user_id: user.id,
        title: job.title,
        type: job.type,
        description: job.description,
        location: job.location,
        salary: job.salary,
        company_name: job.company_name,
        company_description: job.company_description,
        company_email: job.company_email,
        company_phone: job.company_phone,
    });
    const EditJob = async (job) => {
        const res = await fetch(`http://127.0.0.1:8000/api/jobs/${job.id}`, {
            method: "PUT",
            body: JSON.stringify(job),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!res.ok) console.log(res.statusText);
    };

    function formSubmitHandler(e) {
        e.preventDefault();
        EditJob(updatedJob).then((res) => {
            console.log(res)
        });
        toast.success("تمت التعديل بنجاح");
        return navigator("/jobs");
    }

    function HandleChange(e) {
        setUpdatedJob({...updatedJob, [e.target.name]: e.target.value});
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-lg rounded-md  m-4 md:m-0">
                    <form onSubmit={formSubmitHandler}>
                        <h2 className="text-3xl text-center font-semibold mb-6">
                            تعديل الوظيفة
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                نوع الوظيفة
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={updatedJob.type}
                                onChange={HandleChange}
                            >
                                <option value="دوام - كامل">دوام - كامل</option>
                                <option value="دوام - جزئي">دوام - جزئي</option>
                                <option value="عن بعد">عن بعد</option>
                                <option value="تدريب داخلي">
                                    التدريب الداخلي
                                </option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                اسم الوظيفة
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="مثال: مطور ويب كامل"
                                required
                                value={updatedJob.title}
                                onChange={HandleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                الوصف
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="اظف وصف للوظيفة"
                                value={updatedJob.description}
                                onChange={HandleChange}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                المرتب
                            </label>
                            <select
                                id="salary"
                                name="salary"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={updatedJob.salary}
                                onChange={HandleChange}
                            >
                                <option value="أقل من $50K">أقل من $50K</option>
                                <option value="$50K - 60K">$50K - $60K</option>
                                <option value="$60K - 70K">$60K - $70K</option>
                                <option value="$70K - 80K">$70K - $80K</option>
                                <option value="$80K - 90K">$80K - $90K</option>
                                <option value="$90K - 100K">
                                    $90K - $100K
                                </option>
                                <option value="$100K - 125K">
                                    $100K - $125K
                                </option>
                                <option value="$125K - 150K">
                                    $125K - $150K
                                </option>
                                <option value="$150K - 175K">
                                    $150K - $175K
                                </option>
                                <option value="$175K - 200K">
                                    $175K - $200K
                                </option>
                                <option value="Over $200K">
                                    أكثر من $200K
                                </option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                الموقع
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="موقع الوظيفة"
                                required
                                value={updatedJob.location}
                                onChange={HandleChange}
                            />
                        </div>

                        <h3 className="text-2xl mb-5">معلومات الشركة</h3>

                        <div className="mb-4">
                            <label
                                htmlFor="company"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                اسم الشركة
                            </label>
                            <input
                                type="text"
                                id="company_name"
                                name="company_name"
                                className="border rounded w-full py-2 px-3"
                                placeholder="اسم الشركة"
                                value={updatedJob.company_name}
                                onChange={HandleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="company_description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                وصف الشركة
                            </label>
                            <textarea
                                id="company_description"
                                name="company_description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="ماهو مجال عمل الشركة؟"
                                value={updatedJob.company_description}
                                onChange={HandleChange}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="contact_email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                البريد الإلكتروني
                            </label>
                            <input
                                type="email"
                                id="company_email"
                                name="company_email"
                                className="border rounded w-full py-2 px-3"
                                placeholder="البريد الإلكتروني للتقديم"
                                required
                                value={updatedJob.company_email}
                                onChange={HandleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact_phone"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                الهاتف
                            </label>
                            <input
                                type="tel"
                                id="company_phone"
                                name="company_phone"
                                className="border rounded w-full py-2 px-3"
                                placeholder="رقم الهاتف للتقديم (اختياري) "
                                value={updatedJob.company_phone}
                                onChange={HandleChange}
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                تعديل الوظيفة
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default EditJobPage;
