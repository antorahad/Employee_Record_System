import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center py-10 px-5 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold">User Register</h1>
        <form className="bg-slate-100 shadow-sm p-5 flex flex-col items-center justify-center gap-5 w-full">
            <input type="email" placeholder="User Email" className="input rounded-sm w-full" />
            <input type="password" placeholder="User Password" className="input rounded-sm w-full" />
            <input type="submit" value="Register" className="btn btn-success px-10 py-3 rounded-sm text-white" />
            <p className="text-sm">Already a user? <Link to={'/login'} className="underline">Login</Link></p>
        </form>
    </div>
    );
};

export default Register;