import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import JobCategory from "../components/JobCategory/JobCategory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/job')
            
        },
        {
          path: '/jobcategory/:category',
          element: <JobCategory></JobCategory>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.category}`)

        },
        {
          path: '/addjob',
          element: <AddJob></AddJob>
        },
        {
          path: '/mypostedjobs',
          element: <MyPostedJobs></MyPostedJobs>
        },
        {
          path: '/mybids',
          element: <MyBids></MyBids>
        },
        {
          path: '/bidrequests',
          element: <BidRequests></BidRequests>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;