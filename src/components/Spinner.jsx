import {ClipLoader} from "react-spinners";

const override = {
    display: "block",
    margin: "100px auto",
};
const Spinner = ({loading}) => {
    return (
        <ClipLoader
            color="#007a55"
            size={100}
            loading={loading}
            cssOverride={override}
        />
    );
};

export default Spinner;
