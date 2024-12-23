import { Link } from "react-router-dom";

const LatestLostFoundItem = ({lostFoundItem }) => {
    const { postType, description, title, image, category, date, location, name, email } = lostFoundItem

    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
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
                <p><b>Date: </b>  {date}</p>
                <div className="card-actions justify-end">
                    <Link to={``} className="btn bg-black text-white">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default LatestLostFoundItem;