import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="bg-neutral text-neutral-content p-5">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <h4 className="text-xl font-bold">ERMS</h4>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="flex items-center justify-center gap-5">
                        <li><Link to={'/'}>Add employee</Link></li>
                        <li><Link to={'/employees'}>Manage employee</Link></li>
                        <li>
                            {
                                user ?

                                    <div className="flex items-center gap-3">
                                        <p>{user.email}</p>
                                        <button onClick={handleLogOut} className="btn btn-error text-white rounded-sm">Logout</button>
                                    </div>
                                    :
                                    <Link to={'/login'}>
                                        <button className="btn btn-success text-white rounded-sm">Login</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;