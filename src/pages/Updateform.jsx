import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updateform = () => {
    const loadedEmployeeData = useLoaderData ();
    const {
        _id,
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
    } = loadedEmployeeData;
    const handleUpdateEmployee = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const gender = form.gender.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const telephone = form.telephone.value;
        const nid = form.nid.value;
        const department = form.department.value;
        const designation = form.designation.value;
        const sallary = form.sallary.value;
        const joining = form.joining.value;
        const status = form.status.value;
        const photo = form.photo.value;
        const employee_id = form.employee_id.value;
        const address = form.address.value;

        const updateEmployee = {
            firstName,
            lastName,
            gender,
            email,
            mobile,
            telephone,
            nid,
            employee_id,
            department,
            designation,
            sallary,
            joining,
            photo,
            status,
            address
        };

        fetch(`http://localhost:4000/employees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateEmployee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Employee detail updateed",
                        icon: "success"
                    });
                    form.reset()
                }
            })

    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 py-20 px-5 max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold">Update Details: {firstName} {lastName}</h1>
            <form onSubmit={handleUpdateEmployee} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full bg-slate-100 shadow-md p-5 rounded-sm gap-5 mt-5">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Firsrt Name</label>
                    <input type="text" name="firstName" defaultValue={firstName} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Last Name</label>
                    <input type="text" name="lastName" defaultValue={lastName} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Gender</label>
                    <select
                        className="select w-full rounded-sm"
                        name="gender" defaultValue={gender}
                    >
                        <option value="">
                            Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Employee ID</label>
                    <input type="text" name="employee_id" defaultValue={employee_id} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Department</label>
                    <input type="text" name="department" defaultValue={department} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Designation</label>
                    <input type="text" name="designation" defaultValue={designation} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Sallary</label>
                    <input type="text" name="sallary" defaultValue={sallary} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Joining Date</label>
                    <input type="date" name="joining" className="input w-full rounded-sm" defaultValue={joining}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Account Status</label>
                    <select
                        className="select w-full rounded-sm"
                        name="status" defaultValue={status}
                    >
                        <option value="">
                            Select Status
                        </option>
                        <option value="Running">Running</option>
                        <option value="Close">Close</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">NID Serial No</label>
                    <input type="text" name="nid" defaultValue={nid} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                    <label className="font-semibold">Upload Photo</label>
                    <input type="text" name="photo" className="input w-full rounded-sm" defaultValue={photo}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name="email" defaultValue={email} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Mobile Number</label>
                    <input type="text" name="mobile" defaultValue={mobile} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Landline Number</label>
                    <input type="text" name="telephone" defaultValue={telephone} className="input w-full rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Address</label>
                    <input type="text" name="address" defaultValue={address} className="input w-full rounded-sm" />
                </div>
                <input type="submit" value="Submit Details" className="btn btn-warning btn-block rounded-sm text-white" />
            </form>
        </div>
    );
};

export default Updateform;