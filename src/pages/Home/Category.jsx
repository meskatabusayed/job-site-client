import JobCategory from "../../components/JobCategory/JobCategory";





const Category = ({loadedJobs}) => {
    const {category} = loadedJobs || {}
  return (
    <div>
        <h2 className="text-center font-extrabold text-3xl m-10">Browse By Category</h2>
         
        <div>
            <JobCategory></JobCategory>
        </div>
    
    </div>
   
  );
};

export default Category;
