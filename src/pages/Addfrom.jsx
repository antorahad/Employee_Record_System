import Swal from 'sweetalert2';

const Addfrom = () => {
    const handleAddEmployee = e => {
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

        const newEmployee = {
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

        fetch('http://localhost:4000/employees', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newEmployee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: "Created!",
                    text: "Employee detail created",
                    icon: "success"
                });
                form.reset()
            }
        })

    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 py-20 px-5 max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold">Add New Employee Details</h1>
            <form onSubmit={handleAddEmployee} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full bg-slate-100 shadow-md p-5 rounded-sm gap-5 mt-5">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Firsrt Name</label>
                    <input type="text" name="firstName" placeholder="Exp: John" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Last Name</label>
                    <input type="text" name="lastName" placeholder="Exp: Doe" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Gender</label>
                    <select
                        className="select w-full rounded-sm"
                        name="gender" required
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
                    <input type="text" name="employee_id" placeholder="Exp: MKT-101101" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Department</label>
                    <input type="text" name="department" placeholder="Exp: Marketing" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Designation</label>
                    <input type="text" name="designation" placeholder="Exp: Marketing Manager" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Sallary</label>
                    <input type="text" name="sallary" placeholder="Exp: 25,000" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Joining Date</label>
                    <input type="date" name="joining" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Account Status</label>
                    <select
                        className="select w-full rounded-sm"
                        name="status" required
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
                    <input type="text" name="nid" placeholder="Exp: 1514***" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                    <label className="font-semibold">Upload Photo</label>
                    <input type="text" name="photo" className="input w-full rounded-sm" placeholder="Photo URL" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name="email" placeholder="Exp: johndoe@gmail.com" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Mobile Number</label>
                    <input type="text" name="mobile" placeholder="Exp: +8801632****" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Landline Number</label>
                    <input type="text" name="telephone" placeholder="Exp: 800***" className="input w-full rounded-sm" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Address</label>
                    <input type="text" name="address" placeholder="Exp: Mirpur" className="input w-full rounded-sm" required/>
                </div>
                <input type="submit" value="Submit Details" className="btn btn-success btn-block rounded-sm text-white" />
            </form>
        </div>
    );
};

export default Addfrom;