import {FaUser} from "react-icons/fa";
import {useRef} from "react";
import {useStateContext} from "../../contexts/ContextProvider";
import AxiosClient from "../../AxiosClient";
import {NavLink} from "react-router-dom";

const Register = () => {
    const {setUser, setToken} = useStateContext();
    const fullNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const Submit = (e) => {
        e.preventDefault();
        const payload = {
            name: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        AxiosClient.post("/register", payload)
            .then(({data}) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422)
                    console.log(response.data.errors);
            });
    };
    return (
        <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6 mt-20">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center items-center -space-x-3 font-semibold">
                    <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex "/>
                    <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex"/>
                </div>
                <h2 className="my-10 text-center text-3xl leading-9 font-extrabold text-white">
                    إنشاء حساب جديد
                </h2>
                <p className="text-center text-sm leading-5 text-green-500 max-w">
                    أو
                    <NavLink to={"/login"}>
                        <a className="mr-1 font-medium text-green-500 hover:text-green-400 focus:outline-none focus:underline transition ease-in-out duration-150">
                            الدخول لحساب مسجل مسبقا
                        </a>
                    </NavLink>
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={Submit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5  text-gray-700"
                            >
                                الاسم
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    ref={fullNameRef}
                                    id="name"
                                    name="full_name"
                                    placeholder="الاسم الثلاثي"
                                    type="text"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                                <div
                                    className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                اسم المستخدم
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span
                                    className="inline-flex h-10 items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    <FaUser/>
                                </span>
                                <input
                                    ref={userNameRef}
                                    id="username"
                                    name="user_name"
                                    placeholder="اسم المستخدم هنا"
                                    type="text"
                                    required=""
                                    className="flex-1  border border-gray-300 form-input pr-3 block w-full rounded-none rounded-l-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                البريد الإلكتروني
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    ref={emailRef}
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    type="email"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                                <div
                                    className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                كلمة المرور
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    ref={passwordRef}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                تأكيد كلمة المرور
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    إنشاء الحساب
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
