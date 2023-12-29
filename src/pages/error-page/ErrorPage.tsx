import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <p>This is error page</p>
            <Link to="/">Go to home</Link>
        </>
    );
};

export default ErrorPage;