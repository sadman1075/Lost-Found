import Aos from 'aos';
import React, { useEffect } from 'react';

const MyAllRecoverItemSingleCard = ({ myLostFoundItem }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    const { image, date, location, name } = myLostFoundItem
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
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
    );
};

export default MyAllRecoverItemSingleCard;