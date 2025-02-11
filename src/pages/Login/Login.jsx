import Lottie from "lottie-react";
import register_lottie from "../../assets/Register_lottie/Animation - 1734093605552.json"
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { googlesignin, loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/"
    const handlegooglesignin = () => {
        googlesignin()
            .then(result => {
                toast.success("Successfully Login")
                navigate(from)
            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    const handleLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const logininfo = {
            email, password
        }

        loginUser(email, password)
            .then(result => {
                toast.success("successfully Login")

                from.reset();
                navigate("/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <Helmet>
                <title>Login | Lost & Found</title>
            </Helmet>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96 ">
                        <Lottie animationData={register_lottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <h1 className="text-5xl font-bold mt-4 text-center">LogIn now!</h1>

                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
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
                                <button className="btn bg-black text-white">LogIn</button>
                            </div>
                            <div className="divider">Or</div>
                            <div className="form-control  ">
                                <button onClick={handlegooglesignin} className="btn bg-black text-white "><FcGoogle />Sign in with Google</button>
                            </div>
                            <p className="text-sm text-center lg:text-lg">Don't Have An Account? <Link className="text-red-500 font-bold" to={"/register"}>Register</Link></p>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;