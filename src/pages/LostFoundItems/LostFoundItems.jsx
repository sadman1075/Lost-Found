import { useEffect, useState } from "react";
import LostFoundItem from "../LostFoundItem/LostFoundItem";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";

const LostFoundItems = () => {
    const [lostFoundItems, setLostFoundItems] = useState(null)
    const [search, setSearch] = useState("")



    const { data, isPending, refetch } = useQuery({
        queryKey: ["donation"],
        queryFn: async () => fetch("http://localhost:5000/lost-found-items")
            .then(res => res.json())
            .then(data => setLostFoundItems(data))
    })

    if (isPending) {
        return <Loader></Loader>
    }
 
    const handleSearch = () => {
        axios.get(`http://localhost:5000/lost-found-items?search=${search}`)
            .then(data => setLostFoundItems(data.data))
    }
    return (
        <div>
            <Helmet>
                <title>Lost Found Items | Lost & Found</title>
            </Helmet>
            <div className="flex gap-2 pt-4 justify-center items-center">
                <input type="text" placeholder="Search" className="input input-bordered w-40 md:w-auto" onChange={e => setSearch(e.target.value)} />
                <button className="btn  bg-black text-white" onClick={handleSearch}>Search</button>

            </div>
            <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">
                {
                    lostFoundItems?.map(lostFoundItem => <LostFoundItem key={lostFoundItem._id} lostFoundItem={lostFoundItem}></LostFoundItem>)
                }
            </div>
        </div>
    );
};

export default LostFoundItems;