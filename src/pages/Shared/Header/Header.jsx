import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import logo from "../../../../public/logo.jpg"
import toast from "react-hot-toast";

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const { photoURL, email, displayName } = user || ""




    const handlelogout = () => {
        logout()
            .then(result => {
                toast.success("Successfully Log Out")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="navbar  bg-black text-white hover:text-white fixed z-10 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/lost-found-items"}>Lost And Found Post </Link></li>
                            <li><Link to={"/about"}>About</Link></li>




                        </ul>
                    </div>
                    <img src={logo} className="w-20" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/lost-found-items"}>Lost And Found </Link></li>
                        <li><Link to={"/aboutus"}>About_Us</Link></li>



                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex gap-3">

                                    <div className="dropdown dropdown-end   dropdown-hover">
                                        {/* <div tabIndex={0} role="button" className="btn m-1">Hover</div> */}
                                        <div tabIndex={0} className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={photoURL}></img>
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li><Link to={"/add-lost-found-item"}>Add Lost & Found Item </Link></li>
                                            <li><Link to={"/my-all-recovery"}>All Recovered Items </Link></li>
                                            <li><Link to={"/my-lost-found-items"}>Manage My Items </Link></li>

                                        </ul>
                                    </div>

                                    <Link onClick={handlelogout} className="btn bg-black text-white">
                                        Logout
                                    </Link>
                                </div>

                            </>
                            :
                            <Link to={"/login"} className="btn bg-black text-white">Log In</Link>



                    }
                </div>

            </div>
        </div>
    );
};

export default Header;