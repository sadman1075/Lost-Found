import Aos from 'aos';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MyAllRecoverItemSingleCard = ({ myLostFoundItem }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    const { image, date, location, name } = myLostFoundItem
    return (
        <div>
            <Helmet>
                <title>My Recovered Item | Lost & Found</title>
            </Helmet>
            <div className="card card-compact bg-base-100 w-full h-[450px] shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
                <figure>
                    <img
                        src={image}
                        className="w-full h-60"
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <p><b>Location: </b>  {location}</p>
                    <p><b>Date: </b>  {date}</p>
                    <p><b>Owner Name:</b> {name}</p>
                    <p className='text-green-500 font-bold'>Recovered</p>

                </div>
            </div>
        </div>
    );
};

export default MyAllRecoverItemSingleCard;