const Hiring = () => {
  return (
    <div className="py-10">
      <div className="py-10">
        <h2 className="text-3xl font-extrabold text-center">
          Hiring Made Easy
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">
            Talk to One of Our Industry Experts
          </li>
          <li className="step step-primary">Work With Hand-Selected Talent</li>
          <li className="step">The Right Fit, Guaranteed</li>
        </ul>
      </div>
      {/*  */}
      <div className="py-10">
        <h2 className="text-center text-3xl font-extrabold text-slate-500">The #1 Site for Remote Jobs</h2>
        <div>
          <h2 className="text-center text-2xl font-bold text-red-600 mt-5">10,000+ Reviews</h2>
        </div>
        <div className="grid grid-cols-3 items-center">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-green-500">Excellent</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="rating rating-lg">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-pink-400"
              />
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-pink-400"
                checked
              />
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-pink-400"
              />
              
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-black">4.7 out of 5</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
