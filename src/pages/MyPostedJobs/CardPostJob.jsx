import { Link } from "react-router-dom";

const CardPostJob = ({postedJob , handleDelete}) => {
    const {
        _id ,
        employerEmail,
        jobTitle,
        deadline,
        description,
        
        minPrice,
        maxPrice,
      } = postedJob || {};



     



  return (
    <div className="flex items-center justify-center">
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">Job Title : {jobTitle}</h2>
        <h2 className="card-title">Deadline : {deadline}</h2>
        <h2 className="card-title">Price Range : {minPrice} - {maxPrice}</h2>
        <p>Description : {description}</p>
        <div className="card-actions justify-end">
         <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link> 
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default CardPostJob;
