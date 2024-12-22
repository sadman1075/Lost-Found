import { Link } from "react-router-dom";
import about from "../../../public/about.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutUs = () => {
        useEffect(() => {
            Aos.init()
        }, [])
    return (
        
       <div className="mt-10 mb-20" data-aos="zoom-in" data-aos-duration="2000">
            <div className="hero bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={about}
                            className=" rounded-lg w-full h-full  " />
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <h1 className="text-5xl font-bold ">About Our Website</h1>
                        <p className="py-6 text-justify">
                            Our "Lost and Found" project is a dedicated platform aimed at connecting people who have lost or found personal belongings. By leveraging innovative technology and user-friendly interfaces, our mission is to simplify the process of reuniting owners with their lost items.                        </p>
                        <h1 className="text-xl font-bold">How You Can Use Job Portal</h1>
                        <p className="mt-3  text-justify">

                            The "Lost and Found" platform simplifies the process of reconnecting people with their misplaced or recovered belongings. Users can easily report lost or found items by providing detailed descriptions, locations, and photos. The platform employs an intelligent matching system to compare reports and identify potential matches. Once a match is found, users are notified and can communicate securely to arrange the return of the item. This efficient process ensures privacy and fosters a sense of community while making it easier to reunite people with their belongings.                        </p>
                        <Link to={"/lost-and-found"} className="btn bg-black text-white  mt-6">Lost And Found</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;