import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }

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
                    <ul className="hidden lg:flex items-center justify-center gap-5">
                        <li className="px-2"><Link to={'/'}>Add employee</Link></li>
                        <li className="px-2"><Link to={'/employees'}>Manage employee</Link></li>
                        <li className="px-2">
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
                    <button onClick={handleToggle} className="flex lg:hidden items-center">
                        {
                            toggle ?
                                <AiOutlineClose size={25}></AiOutlineClose>
                                :
                                <AiOutlineMenu size={25}></AiOutlineMenu>
                        }
                    </button>
                    {
                        toggle &&
                        <ul className="flex items-center justify-center flex-col p-5 h-screen w-1/2 bg-slate-950 bg-opacity-70 absolute left-0 top-0 z-10">
                            <li className="py-3"><Link to={'/'}>Add employee</Link></li>
                            <li className="py-3"><Link to={'/employees'}>Manage employee</Link></li>
                            <li className="py-3">
                                {
                                    user ?

                                        <div className="flex flex-col items-center gap-3">
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
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;