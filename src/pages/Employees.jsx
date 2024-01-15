import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Employee from "../components/Employee";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const Employees = () => {
    const loadedEmployees = useLoaderData();
    const [employees, setEmployees] = useState(loadedEmployees);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // You can adjust this based on your preference

    const handleSearchEmployee = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFilterEmployees = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.employee_id.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.designation.toLowerCase().includes(search.toLowerCase()) ||
        employee.address.toLowerCase().includes(search.toLowerCase()) ||
        employee.nid.toLowerCase().includes(search.toLowerCase()) ||
        employee.mobile.toLowerCase().includes(search.toLowerCase()) ||
        employee.joining.toLowerCase().includes(search.toLowerCase()) ||
        employee.status.toLowerCase().includes(search.toLowerCase())
    ).slice(indexOfFirstItem, indexOfLastItem);

    const handleDeleteEmployee = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://erms-tau.vercel.app/employees/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Employee detail deleted",
                                icon: "success",
                            });
                            setEmployees(employees.filter((employee) => employee._id !== _id));
                        }
                    });
            }
        });
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen flex flex-col items-start justify-center gap-5 max-w-6xl mx-auto px-5 py-20">
            <Helmet>
                <title>ERMS - All Employee</title>
            </Helmet>
            <h1 className="text-4xl font-bold">Manage All Employees</h1>
            <div className="flex mt-5 w-full md:w-1/3">
                <input onChange={handleSearchEmployee} type="text" placeholder="Search Employee" className="input input-bordered rounded-sm w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    currentFilterEmployees.map((employee) => (
                        <Employee key={employee._id} employee={employee} handleDeleteEmployee={handleDeleteEmployee}></Employee>
                    ))
                }
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-l"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: Math.ceil(employees.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    disabled={currentPage === Math.ceil(employees.length / itemsPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Employees;
