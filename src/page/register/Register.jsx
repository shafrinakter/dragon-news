import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {currentUser}= useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        currentUser(email,password)
        .then((result=>{
            console.log(result.user);
        }))
        .catch(error=>console.log(error));
    }

    return (
        <div className="mt-10">
        <Navbar></Navbar>
        <div className=" mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="p-3 card flex-shrink-0 w-full lg:w-6/12 md:w-6/12 shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl  font-semibold text-[#403F3F] mt-5">Register your account</h1> <hr className="mt-5" />
                    <form onSubmit={handleRegister} className="p-10 space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input required type="url" name='photo' placeholder="Enter your Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>
                        <div className="flex gap-1">
                        <input className="w-10" type="checkbox" name="" id="" />
                        <p className="text-sm text-[#403F3F] font-medium">Accept <span className="font-bold">Term & Conditions</span></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-lg mt-3 bg-[#D72050] text-white capitalize btn-outline">Register</button>
                            <p className="mt-5 text-center text-sm text-[#403F3F] font-medium">Already Have An Account ? <Link to='/login' className="text-red-500">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;