import { useLoaderData  , useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJobPost = () => {

  const navigate = useNavigate()

  const updateJobPost = useLoaderData();
  const {
    _id,
    employerEmail,
    category,
    jobTitle,
    deadline,
    description,

    minPrice,
    maxPrice,
  } = updateJobPost || {};

  const handleUpdateJob = event => {
    event.preventDefault();
    const form = event.target;
    const employerEmail  = form.employerEmail.value;
    const jobTitle       = form.jobTitle.value;
    const deadline       = form.deadline.value;
    const description    = form.description.value;
    const category       = form.category.value;
    const minPrice       = form.minPrice.value;
    const maxPrice       = form.maxPrice.value;

    const updatedJob = {employerEmail , jobTitle  , deadline,  category ,description , minPrice  , maxPrice }
        console.log(updatedJob);
        form.reset();


        //send data to the server

        fetch(`http://localhost:5000/jobs/${_id}` , {
            method:'PUT' ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate('/mypostedjobs');

            }

  })

  }





  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center py-5">Update Job : </h2>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96 my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Update a Job</h2>
          <form onSubmit={handleUpdateJob} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email 
              </label>
              <input
                type="text"
                name="employerEmail"
                value={employerEmail}
                readOnly
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                defaultValue={jobTitle}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                defaultValue={deadline}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="w-full border rounded py-2 px-3"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                className="w-full border rounded py-2 px-3"
              >
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Minimum Price
                </label>
                <input
                  type="number"
                  name="minPrice"
                  defaultValue={minPrice}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Maximum Price
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  defaultValue={maxPrice}
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
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobPost;
