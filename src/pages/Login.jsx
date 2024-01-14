import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Login successful",
                    footer: ''
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    text: `${error.message}`,
                    footer: ''
                });
            });
    
    }
    return (
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center py-10 px-5 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold">User Login</h1>
            <form onSubmit={handleLogIn} className="bg-slate-100 shadow-sm p-5 flex flex-col items-center justify-center gap-5 w-full">
                <input type="email" name="email" placeholder="User Email" className="input rounded-sm w-full" />
                <input type="password" name="password" placeholder="User Password" className="input rounded-sm w-full" />
                <input type="submit" value="Login" className="btn btn-success px-10 py-3 rounded-sm text-white" />
                <p className="text-sm">New to EMS? <Link to={'/register'} className="underline">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;