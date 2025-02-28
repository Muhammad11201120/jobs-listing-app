import Card from "./Card";
import {Link} from "react-router-dom";

const HomeCards = () => {
    return (
        <section className="py-4 ">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card bg=" bg-gradient-to-l from-emerald-400/10 ">
                        <h2 className="text-2xl font-bold">للمطورين</h2>
                        <p className="mt-2 mb-4">
                            تصفح وظائف React لدينا وابدأ حياتك المهنية اليوم
                        </p>
                        <Link
                            to="/jobs"
                            className="inline-block bg-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-900"
                        >
                            تصفح الوظائف
                        </Link>
                    </Card>
                    <Card bg=" bg-gradient-to-l from-emerald-400/10">
                        <h2 className="text-2xl font-bold">لأصحاب العمل</h2>
                        <p className="mt-2 mb-4">
                            أضف وظيفة React الخاصة بك وابدأ في استقطاب المطورين
                        </p>
                        <Link
                            to="/add-job"
                            className="inline-block bg-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-900"
                        >
                            وظيفة جديدة
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HomeCards;
