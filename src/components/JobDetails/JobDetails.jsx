import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const JobDetails = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  

  const jobDetails = useLoaderData();
  const {
    
    employerEmail,
    jobTitle,
    deadline,
    description,
    
    minPrice,
    maxPrice,
  } = jobDetails || {};



  const handleAddBid = event => {
    event.preventDefault();
    const form = event.target;
    const price  = form.price.value;
    const deadline       = form.deadline.value;
    const email      = form.email.value;
    const buyerEmail    = form.buyerEmail.value;
    const jobTitle   = form.jobTitle.value;
    const newBid = {price , deadline , email   , buyerEmail , jobTitle  }
    console.log(newBid);
    form.reset();


    // send data to the server
    fetch('http://localhost:5000/bid' , {
            method: 'POST' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'Do you want to continue',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                navigate('/mybids');

          }
          
        })

  }
  
  return (
    <div>
        {/* job details card start */}

        <div className="flex items-center justify-center py-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Name: {jobTitle}</h2>
          <h2>Deadline: {deadline} </h2>
          <h2>Price Range : {minPrice} - {maxPrice}</h2>
            <p>Description : {description}</p>
          
        </div>
      </div>
      </div>
       {/* job details card end */}
       {/* Bid Now form */}
       <div className="bg-gray-200 p-4 mb-10 rounded-lg max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">Place a Bid</h2>
      <form onSubmit={handleAddBid}>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter Price"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            placeholder="Enter Deadline"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            placeholder="Enter Email"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="buyerEmail" className="block text-sm font-medium text-gray-600">
            Buyer Email
          </label>
          <input
            type="text"
            id="buyerEmail"
            name="buyerEmail"
            readOnly
            value={employerEmail} // Replace with your default value
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="buyerEmail" className="block text-sm font-medium text-gray-600">
            JobTitle
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            readOnly
            value={jobTitle} 
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Bid on the Project
        </button>
      </form>
    </div>
    </div>
  );
};

export default JobDetails;
