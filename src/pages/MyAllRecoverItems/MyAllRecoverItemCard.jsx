import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import MyAllRecoverItemSingleCard from './MyAllRecoverItemSingleCard';
import { Link } from 'react-router-dom';
import { LuTableOfContents } from 'react-icons/lu';
import { CgMenuGridO } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';

const MyAllRecoverItemCard = () => {
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
    <div>
        <Helmet>
            <title>My Recovered Item | Lost & Found</title>
        </Helmet>
        <div className="flex justify-end gap-3 mb-8">
            <Link className="btn" to={"/my-all-recovery"}><LuTableOfContents className="text-xl " /></Link>
            <Link className="btn" to={"/my-all-recovery-card"}><CgMenuGridO className='text-xl' /></Link>

        </div>
        {
            allrecovers?.length == 0 ? <p className="text-center font-bold text-5xl text-red-400 mb-10">Your are not Recover any things</p> : <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">
                {
                    allrecovers?.map(myLostFoundItem => <MyAllRecoverItemSingleCard key={myLostFoundItem._id} myLostFoundItem={myLostFoundItem}></MyAllRecoverItemSingleCard>)
                }
            </div>


        }
    </div>
);
};

export default MyAllRecoverItemCard;