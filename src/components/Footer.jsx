import {Typography} from "@material-tailwind/react";

const Footer = () => {
    return (<footer className="w-full bg-gray-900 p-8">
        <hr className="my-8 border-blue-gray-50 text-gray-400"/>
        <Typography color="blue-gray" className="text-center font-normal text-gray-400">
            &copy; 2025 Muhammed Issa
        </Typography>
    </footer>);
}
export default Footer;