import {useRef, useState} from "react";
import {useStateContext} from "../../contexts/ContextProvider";
import AxiosClient from "../../AxiosClient";
import {toast} from "react-toastify";
import {NavLink, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [remember, setRemember] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const {setUser, setToken} = useStateContext();
    const Submit = (e) => {
        e.preventDefault();
        const payLoad = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        AxiosClient.post("/login", payLoad)
            .then(({data}) => {
                setUser(data.user);
                setToken(data.token);
                toast.success("تم تسجيل الدخول بنجاح");
                return navigate("/");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
                console.log(response);
                toast.error("حدث خطأ أثناء محاولة تسجيل الدخول حاول مرة أخرى");
                return navigate("/login");
            });
    };
    return (
        <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center items-center -space-x-3 font-semibold">
                    <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex "/>
                    <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex"/>
                </div>
                <h2 className="my-10 text-center text-3xl leading-9 font-extrabold text-white">
                    تسجيل الدخول لحسابك
                </h2>
                <p className="my-10 text-center text-sm leading-5 text-green-500 max-w">
                    أو
                    <NavLink to={"/register"}
                             className={'mr-1 font-medium text-green-500 hover:text-green-400 focus:outline-none focus:underline transition ease-in-out duration-15'}>
                        <a>إنشاء حساب جديد</a>
                    </NavLink>
                </p>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-100 py-10 px-6 shadow shadow-gray-100 sm:rounded-lg sm:px-10 ">
                    <form onSubmit={Submit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5  text-gray-700"
                            >
                                البريد الإلكتروني
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    type="email"
                                    required={true}
                                    ref={emailRef}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    id="password"
                                    name="password"
                                    type="password"
                                    required=""
                                    ref={passwordRef}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember"
                                    type="checkbox"
                                    value={remember}
                                    onChange={(e) =>
                                        setRemember(e.target.value)
                                    }
                                    checked={remember === "true"}
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="mr-2 block text-sm leading-5 text-gray-900"
                                >
                                    تذكرني
                                </label>
                            </div>

                            <div className="text-sm leading-5">
                                <a
                                    href="#"
                                    className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                >
                                    نسيت كلمة المرور ؟
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 cursor-pointer hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    تسجيل الدخول
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
