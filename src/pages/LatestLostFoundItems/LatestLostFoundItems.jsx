import { useEffect, useState } from "react";
import LatestLostFoundItem from "../LatestLostFoundItem/LatestLostFoundItem";
import { Link } from "react-router-dom";

const LatestLostFoundItems = () => {
    const [lostFoundItems, setLostFoundItems] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/latest-lost-found-items")
            .then(res => res.json())
            .then(data => setLostFoundItems(data))
    }, [])
    return (
        <div>
            <h1 className="text-center font-bold text-5xl">Latest Lost Found Posts</h1>
            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">

                {
                    lostFoundItems?.map(lostFoundItem => <LatestLostFoundItem key={lostFoundItem._id} lostFoundItem={lostFoundItem}></LatestLostFoundItem>)
                }
            </div>
            <Link to={"/lost-found-items"} className="btn bg-black text-white font-bold">See All</Link>

        </div>

    );
};

export default LatestLostFoundItems;