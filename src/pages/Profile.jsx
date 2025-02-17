import { Navigate } from "react-router-dom";
function Profile() {
    const user = JSON.parse(localStorage.getItem("USER"));
    console.log(user);

    return user ? (
        <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
            <img
                className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
            />
            <h1 className="text-2xl text-gray-500 font-bold mt-2">
                {user.name}
            </h1>
            <h2 className="text-base md:text-xl text-gray-500 font-bold">
                {user.email}
            </h2>

            <h2 className="text-base md:text-xl text-gray-500 font-bold">
                {user.userName}
            </h2>
            <h2 className="text-base md:text-xl text-gray-500 font-bold">
                {user.created_at}
            </h2>
        </header>
    ) : (
        <Navigate to={"/login"} />
    );
}

export default Profile;
