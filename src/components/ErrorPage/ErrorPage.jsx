import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-20">
             <h1 className="text-4xl mb-4">404 Not Found</h1>
             <NavLink to="/">
                <button className="border-2">Home</button>
             </NavLink>
        </div>
    );
};

export default ErrorPage;