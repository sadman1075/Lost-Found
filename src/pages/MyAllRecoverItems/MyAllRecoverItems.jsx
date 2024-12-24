import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { LuTableOfContents } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";

const MyAllRecoverItems = () => {
    const { user } = useContext(AuthContext)
    const [allrecovers, setAllrecovers] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/recover?${user?.email}`, {
            withCredentials: true
        })
            .then(res => setAllrecovers(res.data))
    }, [user?.email])
    return (
        <div>
            <div className="flex justify-end gap-4">
                <Link className="btn" to={"/my-all-recovery"}><LuTableOfContents className="text-xl " /></Link>
                <Link className="btn" to={"/my-all-recovery-card"}><CgMenuGridO className='text-xl' /></Link>

            </div>
            <div className="mt-10 mb-20">
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

            </div>
        </div>
    );
};

export default MyAllRecoverItems;