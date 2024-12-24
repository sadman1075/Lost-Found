import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import MyAllRecoverItemSingleCard from './MyAllRecoverItemSingleCard';
import { Link } from 'react-router-dom';
import { LuTableOfContents } from 'react-icons/lu';
import { CgMenuGridO } from 'react-icons/cg';

const MyAllRecoverItemCard = () => {
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
            <div className="flex justify-end gap-3 mb-8">
                <Link className="btn" to={"/my-all-recovery"}><LuTableOfContents className="text-xl " /></Link>
                <Link className="btn" to={"/my-all-recovery-card"}><CgMenuGridO className='text-xl' /></Link>

            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">
                {
                    allrecovers?.map(myLostFoundItem => <MyAllRecoverItemSingleCard key={myLostFoundItem._id} myLostFoundItem={myLostFoundItem}></MyAllRecoverItemSingleCard>)
                }
            </div>

        </div>
    );
};

export default MyAllRecoverItemCard;