import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageMyItems = () => {
    const [myLostFoundItems, setMyLostFoundItems] = useState(null)
    const { user } = useContext(AuthContext)


    useEffect(() => {
        axios.get(`http://localhost:5000/lost-found-items?email=${user?.email}`)
            .then(res => setMyLostFoundItems(res.data))
    }, [user?.email])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const { data: myLostFoundItems, refetch } = useQuery({
                    queryKey: ["myLostFoundItems"],
                    queryFn: axios.delete(`http://localhost:5000/lost-found-items/${id}`, { withCredentials: true })
                        .then(res => {

                            if (res.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",

                                });
                                refetch()

                            }


                        })

                })
            }
        })
    }
    return (
        <div className="mt-10 mb-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Post Type</th>
                            <th>category</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myLostFoundItems?.map(myLostFoundItem => <>

                                <tr>

                                    <td>{myLostFoundItem.postType}</td>
                                    <td>{myLostFoundItem.category}</td>
                                    <td>{myLostFoundItem.date}</td>
                                    <td>{myLostFoundItem.location}</td>
                                    <p className="flex gap-2">
                                        <td><Link to={`/update/${myLostFoundItem._id}`} className="btn bg-green-500 text-white font-bold">Update</Link></td>
                                        <td><Link onClick={() => handleDelete(myLostFoundItem._id)} className="btn bg-red-500 text-white font-bold ">Delete</Link></td>
                                    </p>
                                </tr>

                            </>)
                        }



                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageMyItems;