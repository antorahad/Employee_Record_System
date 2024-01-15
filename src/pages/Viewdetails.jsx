import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Viewdetails = () => {
    const loadEmployeeData = useLoaderData();
    const {
        employee_id,
        address,
        firstName,
        lastName,
        gender,
        email,
        mobile,
        telephone,
        nid,
        department,
        designation,
        sallary,
        joining,
        photo,
        status,
    } = loadEmployeeData
    return (
        <div className="min-h-screen py-20 px-5 max-w-6xl mx-auto flex flex-col justify-center gap-5">
            <Helmet>
                <title>ERMS - Employee Details</title>
            </Helmet>
            <h1 className="text-4xl font-bold">Details of {firstName} {lastName}</h1>
            <div className="mt-5 flex flex-col gap-5">
                <div className="w-[300px] h-[300px]">
                    <img src={photo} className="w-full h-full border rounded-sm object-cover" alt="employee image" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    <div className="flex flex-col gap-3">
                        <p><span className="font-bold">Employee Name:</span> {firstName} {lastName}</p>
                        <p><span className="font-bold">Employee ID:</span> {employee_id}</p>
                        <p><span className="font-bold">Department:</span> {department}</p>
                        <p><span className="font-bold">Designation:</span> {designation}</p>
                        <p><span className="font-bold">Sallary:</span> {sallary} TK</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p><span className="font-bold">Joining Date:</span> {joining}</p>
                        <p className="font-bold">
                            Account Status:
                            <span className={`badge ml-2 ${status === 'Running' ? 'badge-success' : 'badge-error'} p-2 rounded-md text-xs text-white`}>{status}</span>
                        </p>
                        <p><span className="font-bold">National ID:</span> {nid}</p>
                        <p><span className="font-bold">Gender:</span> {gender}</p>
                        <p><span className="font-bold">Email:</span> {email}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p><span className="font-bold">Mobile Number:</span> {mobile}</p>
                        <p><span className="font-bold">Landline Number:</span> {telephone}</p>
                        <p><span className="font-bold">Address:</span> {address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewdetails;