import { useEffect, useState } from "react";
import LostFoundItem from "../LostFoundItem/LostFoundItem";

const LostFoundItems = () => {
    const [lostFoundItems, setLostFoundItems] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/lost-found-items")
            .then(res => res.json())
            .then(data => setLostFoundItems(data))
    }, [])
    return (
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">
            {
                lostFoundItems?.map(lostFoundItem => <LostFoundItem key={lostFoundItem._id} lostFoundItem={lostFoundItem}></LostFoundItem>)
            }
        </div>
    );
};

export default LostFoundItems;