import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";



const AddJob = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const employerEmail  = form.employerEmail.value;
        const jobTitle       = form.jobTitle.value;
        const deadline       = form.deadline.value;
        const description    = form.description.value;
        const category       = form.category.value;
        const minPrice       = form.minPrice.value;
        const maxPrice       = form.maxPrice.value;
        const newJob = {employerEmail ,jobTitle  , deadline , description , category  , minPrice , maxPrice }
        console.log(newJob);
        form.reset();

        // send data to the server
        fetch('https://meskat-11-assignment-ph-server.vercel.app/job' , {
            method: 'POST' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
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
                  navigate('/mypostedjobs');

            }
        })
    }
  
    
      return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
          <Helmet>
            <title>Jobify | AddJob</title>
          </Helmet>
        <div className="bg-white p-8 rounded shadow-lg w-96 my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a Job post</h2>
          <form onSubmit={ handleAddJob } className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Email of the Employer</label>
              <input
                type="text"
                name="employerEmail"
                value={user.email}
                readOnly
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Deadline</label>
              <input
                type="date"
                name="deadline"
                
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Description</label>
              <textarea
                name="description"
                
                className="w-full border rounded py-2 px-3"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Category</label>
              <select
                name="category"
               
                className="w-full border rounded py-2 px-3"
              >
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Minimum Price</label>
                <input
                  type="number"
                  name="minPrice"
                  
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Maximum Price</label>
                <input
                  type="number"
                  name="maxPrice"
                 
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddJob;