import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Registration successful",
                footer: ''
            });
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    return (
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center py-10 px-5 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold">User Register</h1>
            <form onSubmit={handleRegister} className="bg-slate-100 shadow-sm p-5 flex flex-col items-center justify-center gap-5 w-full">
                <input type="email" name="email" placeholder="User Email" className="input rounded-sm w-full" />
                <input type="password" name="password" placeholder="User Password" className="input rounded-sm w-full" />
                <input type="submit" value="Register" className="btn btn-success px-10 py-3 rounded-sm text-white" />
                <p className="text-sm">Already a user? <Link to={'/login'} className="underline">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;