import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const UnFoundPage = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center h-96">
            <FaExclamationTriangle className="text-6xl text-indigo-700 mb-4" />
            <h1 className="text-5xl font-bold mb-4">
                404 هذه الصفحة غير متوفرة
            </h1>
            <Link
                to="/"
                className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
            >
                العودة إلى الصفحة الرئيسية
            </Link>
        </section>
    );
};

export default UnFoundPage;
