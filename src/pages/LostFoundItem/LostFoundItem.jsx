import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns"
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const LostFoundItem = ({ lostFoundItem }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    const { _id, postType, description, title, image, category, date, location, name, email } = lostFoundItem





    return (
        <div>
            <Helmet>
                <title>Lost Found Items | Lost & Found</title>
            </Helmet>
            <div className="card card-compact bg-base-100 w-full h-[600px] shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
                <figure>
                    <img
                        src={image}
                        className="w-full h-60"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title text-red-500 font-bold">{postType}</h2>
                    <p>{description}</p>
                    <p><b>Location: </b>  {location}</p>
                    <p><b>Date: </b>  {format(new Date(date), "P")}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`} className="btn bg-black text-white">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostFoundItem;