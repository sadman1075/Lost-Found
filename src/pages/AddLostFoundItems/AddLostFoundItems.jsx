import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddLostFoundItems = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const ms = startDate.getTime();
    console.log(ms)

    const handleAddLostFoundItem = (e) => {
        e.preventDefault();
        const from = e.target;
        const postType = from.postType.value;
        const image = from.image.value;
        const title = from.title.value;
        const description = from.description.value;
        const category = from.category.value;
        const location = from.location.value;
        const date = ms;
        const email = from.email.value;
        const name = from.name.value;

        const newPost = {
            postType, image, title, description, category, location, date, email, name
        }

        console.log(date)
        console.log(newPost)

        fetch("http://localhost:5000/lost-found-items", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPost)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully posted!",
                        icon: "success"
                    });

                    from.reset(
                    
                }
            })


    }

    return (
        <div >
            <Helmet>
                <title>Add Lost Found Items | Lost & Found</title>
            </Helmet>
            <div className="bg-[#F4F3F0] ">
                <div>
                    <h1 className="text-4xl font-bold rancho text-center pt-8">Add Lost And Found Items</h1>
                    <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">
                        The "Lost and Found" platform simplifies the process of reconnecting people with their misplaced or recovered belongings, including personal items such as wallets, keys, phones, jewelry, bags, and even important documents. Users can easily report lost or found items by providing detailed descriptions, locations, and photos</h1>
                </div>
                <form className="card-body" onSubmit={handleAddLostFoundItem}>
                    <div className="lg:flex justify-center w-full gap-20">
                        <div className="form-control lg:w-[300px]">
                            <label className="label">
                                <span className="label-text">Post Type</span>
                            </label>
                            <select className="select select-ghost border-1 border-gray-300 bg-white w-full " name="postType" required>
                                <option disabled selected>Select The Post type</option>
                                <option>Lost</option>
                                <option>Found</option>

                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="url" name="image" placeholder="Enter the lost found item images" className="input input-bordered lg:w-[300px]" required />

                        </div>
                    </div>
                    <div className="lg:flex justify-center w-full gap-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Enter the title" className="input input-bordered lg:w-[300px]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Enter description" className="input input-bordered lg:w-[300px]" required />

                        </div>
                    </div>
                    <div className="lg:flex justify-center w-full gap-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter the ○	Category (e.g., pets, documents, gadgets) " className="input input-bordered lg:w-[300px]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Enter the Location" className="input input-bordered lg:w-[300px]" required />

                        </div>
                    </div>
                    <div className="lg:flex justify-center">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Date (Lost or Found)</span>
                            </label>
                            <DatePicker className="input input-bordered w-full lg:w-[690px]" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />

                        </div>
                    </div>

                    <div className="lg:flex justify-center">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" readOnly value={user?.email} className="input input-bordered lg:w-[690px]" required />

                        </div>
                    </div>
                    <div className="lg:flex justify-center">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" value={user?.displayName} className="input input-bordered lg:w-[690px]" required />

                        </div>
                    </div>
                    <div className="lg:flex justify-center">
                        <div className=" form-control lg:w-[690px] mt-6 ">
                            <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Add Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLostFoundItems;