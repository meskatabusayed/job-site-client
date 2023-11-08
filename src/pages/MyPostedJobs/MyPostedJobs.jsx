import {  useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CardPostJob from "./CardPostJob";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const MyPostedJobs = () => {

    const {user} = useContext(AuthContext);
    const [postedJobs , setPostedJobs] = useState([]);
    const url = `https://meskat-11-assignment-ph-server.vercel.app/job?employerEmail=${user.email}`;
    useEffect(() => {

        axios.get(url)
        .then(res => {
            setPostedJobs(res.data)
        })


        // fetch(url)
        // .then(res => res.json())
        // .then(data => setPostedJobs(data))
    } , [])



    const handleDelete = id => {
        const proceed = confirm('Do You Want to Delete');
        
        
        if(proceed){
            fetch(`https://meskat-11-assignment-ph-server.vercel.app/job/${id}` , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = postedJobs.filter(postedJob => postedJob._id !== id);
                setPostedJobs(remaining)

                // if(data.deletedCount > 0){
                //    const remaining = postedJobs.filter(postedJob => postedJob._id !== id);
                //     setPostedJobs(remaining)
                    
                // }

            })
        }
      }

    // console.log(postedJobs);

    return (
        <div className="py-10">
            <Helmet>
                <title>Jobify | myPostedJob</title>
            </Helmet>
            <h2 className="text-center text-3xl font-extrabold text-lime-600 py-10">My Posted Jobs: {postedJobs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            {
                postedJobs.map(postedJob => <CardPostJob
                key={postedJob._id}
                postedJob={postedJob}
                handleDelete={handleDelete}
                >

                </CardPostJob>)
            }
            </div>
        </div>
    );
};

export default MyPostedJobs;