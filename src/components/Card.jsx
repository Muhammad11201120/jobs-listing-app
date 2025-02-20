const Card = ({children, bg = "bg-white"}) => {
    return <div className={`${bg} m-5 md:ml-30 p-6 rounded-lg shadow-md text-white `}>{children}</div>;
};

export default Card;
