import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { LuTableOfContents } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { Helmet } from "react-helmet-async";
import Loader from "../Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const MyAllRecoverItems = () => {
    const { user } = useContext(AuthContext)
    const [allrecovers, setAllrecovers] = useState(null)


    const { data, isPending, refetch } = useQuery({
        queryKey: ["donation", user?.email],
        queryFn: async () => fetch(`http://localhost:5000/recover?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllrecovers(data))

    })

    if(isPending){
        return <Loader></Loader>
    }
    return (
        <div className="pt-24 ">
            <Helmet>
                <title>My Recover Item | Lost & Found</title>
            </Helmet>
            <div className="flex justify-end  gap-4">
                <Link className="btn" to={"/my-all-recovery"}><LuTableOfContents className="text-xl " /></Link>
                <Link className="btn" to={"/my-all-recovery-card"}><CgMenuGridO className='text-xl' /></Link>

            </div>
            <div className="mt-10 mb-20">
                {
                    allrecovers?.length == 0 ? <p className="text-center font-bold text-5xl text-red-400 mb-10">Your are not Recover any things</p> :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Date</th>
                                        <th>location</th>
                                        <th>Owner Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        allrecovers?.map(myLostFoundItem => <>



                                            <tr>

                                                <td>{myLostFoundItem.date}</td>
                                                <td>{myLostFoundItem.location}</td>
                                                <td>{myLostFoundItem.name}</td>
                                                <td className="text-green-500 font-bold">Recovered</td>

                                            </tr>

                                        </>)
                                    }



                                </tbody>
                            </table>
                        </div>
                }



            </div>
        </div>
    );
};

export default MyAllRecoverItems;