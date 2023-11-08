import { Children, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewRow from "./NewRow";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
 const [bidRequests, setBidRequests] = useState([]);
  
  

  const url = `https://meskat-11-assignment-ph-server.vercel.app/bid?buyerEmail=${user?.email}`;
  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setBidRequests(data));
  //   }, [url]);

  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["Meskat"],
    queryFn: () =>
      axios(url).then((res) => setBidRequests(res.data)),
  });
  console.log(bidRequests);
  if(isLoading){
    return <h1>Loading</h1>
  }

  //console.log(bidRequests._id);

  

  //console.log(values);

  return (
    <div>
      <Helmet>
        <title>Jobify | BidRequests</title>
      </Helmet>
      <h2 className="text-center text-3xl font-extrabold text-lime-600 py-10">
        My Bids: {bidRequests.length}
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
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            

            {
                bidRequests.map(bidReq => <NewRow
                key={bidReq._id}
                bidReq={bidReq}
                >

                </NewRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
