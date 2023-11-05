import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const JobCategory = () => {
  const jobcategorys = useLoaderData();
 

  return (
    <div>
      <Tabs>
        <TabList className="flex items-center justify-center space-x-4">
          <Tab className="text-blue-500 hover:text-blue-700">
            Web Development
          </Tab>
          <Tab className="text-blue-500 hover:text-blue-700">
            Digital Marketing
          </Tab>
          <Tab className="text-blue-500 hover:text-blue-700">
            Graphic Design
          </Tab>
        </TabList>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {jobcategorys
            .filter((item) => item.category === "web-development")
            .map((item) => (
                <div key={item._id} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                  <h2 className="text-xl font-semibold">Title : {item.jobTitle}</h2>
                  <p className="text-gray-600 text-sm">Date: {item.deadline}</p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-700">Price Range : {item.minPrice} - {item.maxPrice}</p>
                </div>
          
                <div className="px-4 py-2">
        <p className="text-gray-600 text-sm">Description: {item.
description}</p>
                </div>
          
                <div className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bid Now
                  </button>
                </div>
              </div>
            ))}
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {jobcategorys
            .filter((item) => item.category === "digital-marketing")
            .map((item) => (
                <div key={item._id} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                  <h2 className="text-xl font-semibold">Title : {item.jobTitle}</h2>
                  <p className="text-gray-600 text-sm">Date: {item.deadline}</p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-700">Price Range : {item.minPrice} - {item.maxPrice}</p>
                </div>
          
                <div className="px-4 py-2">
        <p className="text-gray-600 text-sm">Description: {item.
description}</p>
                </div>
          
                <div className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bid Now
                  </button>
                </div>
              </div>
            ))}
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {jobcategorys
            .filter((item) => item.category === "graphic-design")
            .map((item) => (
                <div key={item._id} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                  <h2 className="text-xl font-semibold">Title : {item.jobTitle}</h2>
                  <p className="text-gray-600 text-sm">Date: {item.deadline}</p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-700">Price Range : {item.minPrice} - {item.maxPrice}</p>
                </div>
          
                <div className="px-4 py-2">
        <p className="text-gray-600 text-sm">Description: {item.
description}</p>
                </div>
          
                <div className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bid Now
                  </button>
                </div>
              </div>
            ))}
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
