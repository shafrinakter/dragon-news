import { Link, NavLink } from "react-router-dom";
import userPhoto from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = ()=>{
        logOut()
        .then()
        .catch() 
    }

    const navlink = <>
        < li ><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink></li>
        < li ><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            About
        </NavLink></li>
        < li ><NavLink
            to="/career"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
            }
        >
            Career
        </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 mb-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end  gap-4 ">
                    <img className="w-10" src={userPhoto} alt="" />
                    {
                        user ? <button onClick={handleSingOut} className="btn w-32 capitalize ">Sing Out</button> : 
                        <Link to='/login'>
                            <button className="btn w-32 capitalize ">Login</button>
                        
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;