import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {
    const { singIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLoging = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        singIn(email, password)
            .then((result => {
                console.log(result.user)
                // navigate after login
                navigate(location?.state ? location.state : '/');

            }))
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="mt-10">
            <Navbar></Navbar>
            <div className=" mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-3xl font-semibold text-[#403F3F] mt-5">Login your account</h1> <hr className="mt-10" />
                        <form onSubmit={handleLoging} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                    <button className="btn bg-[#D72050] text-white capitalize btn-outline">Login</button>
                                
                                <p className="mt-5 text-center text-sm text-[#403F3F] font-medium">Dont’t Have An Account ? <Link to='/register' className="text-red-500">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;