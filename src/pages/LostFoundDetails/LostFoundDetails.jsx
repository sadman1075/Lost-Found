import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const LostFoundDetails = () => {
    const lostFoundItem = useLoaderData()
    const navigate=useNavigate()
    const { user } = useContext(AuthContext)
    const { postType, description, title, image, category, date, location, name, email } = lostFoundItem
    const [startDate, setStartDate] = useState(new Date());

    const handleModal = () => {
        document.getElementById('my_modal_1').showModal()
    }
    const handleRecover = e => {
        e.preventDefault();
        const from = e.target;
        const location = from.location.value;
        const date = from.date.value;
        const email = from.email.value;
        const name = from.name.value;
        const image = from.image.value;


        const Recover = {
            location, date, name, email, image
        }

        console.log(Recover)
        axios.post("http://localhost:5000/recover", Recover)
            .then(res =>{
                if(res.data.insertedId){
                    toast.success("Successfully Submit")
                    navigate(-1)
                  
                }
            })

    }

    return (
        <div className="card bg-base-100 lg:w-4/5 mx-auto mb-20">
            <figure>
                <img
                    src={image}
                    className="lg:h-[450px] w-full rounded-2xl"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Post Type: <span className="text-red-500">{postType}</span></h2>
                <h2 className="card-title">Category: {category}</h2>
                <h2 className="card-title">Post Title: {title}</h2>
                <p>Description: {description}</p>
                <p><b>Location:</b> {location}</p>
                <p><b>DeadLine: </b>{date}</p>
                <p><b>Posted by: </b> {name}</p>
                <p><b>Posted email: </b> {email}</p>



            </div>
            <div className="card-actions justify-between items-center">
                <Link onClick={handleModal} className="btn bg-teal-500 text-white w-32">{`${postType == "Lost" ? " Found This!" : "This is Mine!"}`}</Link>

                <Link to={-1} className="btn bg-black text-white">Back</Link>

            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg">Recover</h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-lg btn-circle btn-ghost absolute text-red-500 right-2 top-2">✕</button>
                    </form>
                    <form className="card-body" onSubmit={handleRecover}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Enter the Location" className="input input-bordered w-full" required />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Date (Lost or Found)</span>
                            </label>
                            <DatePicker className="input input-bordered w-full " name="date" selected={startDate} onChange={(date) => setStartDate(date)} />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered w-full" required />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" readOnly value={user?.email} className="input input-bordered w-ful" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="url" name="image" defaultValue={user.photoURL} readOnly placeholder="Enter the lost found item images" className="input input-bordered w-full" required />

                        </div>
                        <div className=" form-control  mt-6 ">
                            <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Submit</button>
                        </div>
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default LostFoundDetails;