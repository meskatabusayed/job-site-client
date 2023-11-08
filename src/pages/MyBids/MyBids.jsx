import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidRow from "./BidRow";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bidData, setBidData] = useState([]);
   
//   const { email
//     , deadline} = bidData || {}

  const url = `https://meskat-11-assignment-ph-server.vercel.app/bid?email=${user?.email}`;
  useEffect(() => {

    axios.get(url)
    .then(res => {
      setBidData(res.data)
    })


    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBidData(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Jobify | MyBids</title>
      </Helmet>
      <h2 className="text-center text-3xl font-extrabold text-lime-600 py-10">
        My Bids: {bidData.length}
      </h2>
      {/* bid table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Job title</th> */}
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bidData.map(mybids => <BidRow
                key={mybids._id}
                mybids={mybids}
                ></BidRow>)
            }

            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
