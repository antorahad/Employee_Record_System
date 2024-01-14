import { Link } from "react-router-dom";

const Employee = ({ employee, handleDeleteEmployee }) => {
    const {
        employee_id,
        _id,
        firstName,
        lastName,
        status,
        designation,
        photo,
    } = employee
    return (
        <div>
            <div className="card bg-base-50 shadow-md rounded-sm">
                <figure><img src={photo} className="w-full h-[300px] object-cover" alt="Employee image" /></figure>
                <div className="card-body">
                    <p><span className="font-bold">Name:</span> {firstName} {lastName}</p>
                    <p><span className="font-bold">ID:</span> {employee_id}</p>
                    <p className="font-bold">
                        Account Status:
                        <span className={`badge ml-2 ${status === 'Running' ? 'badge-success' : 'badge-error'} p-2 rounded-md text-xs text-white`}>{status}</span>
                    </p>
                    <p><span className="font-bold">Designation:</span> {designation}</p>
                    <div className="flex items-center gap-2 mt-5">
                        <Link to={`/viewdetails/${_id}`}>
                            <button className="btn btn-success text-white py-3 px-6 rounded-sm">View</button>
                        </Link>
                        <Link to={`/updateform/${_id}`}>
                            <button className="btn btn-warning text-white py-3 px-6 rounded-sm">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteEmployee(_id)} className="btn btn-error text-white py-3 px-6 rounded-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;