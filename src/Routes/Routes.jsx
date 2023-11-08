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
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../components/JobDetails/JobDetails";
import UpdateJobPost from "../pages/UpdateJobPost/UpdateJobPost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://meskat-11-assignment-ph-server.vercel.app/job')
            
        },
        {
          path: '/jobcategory/:category',
          element: <JobCategory></JobCategory>,
          loader: ({params}) => fetch(`https://meskat-11-assignment-ph-server.vercel.app/job/${params.category}`)

        },
        {
          path: '/details/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://meskat-11-assignment-ph-server.vercel.app/jobs/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <UpdateJobPost></UpdateJobPost>,
          loader: ({params}) => fetch(`https://meskat-11-assignment-ph-server.vercel.app/jobs/${params.id}`)
        },
        {
          path: '/addjob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/mypostedjobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: '/mybids',
          element: <PrivateRoute><MyBids></MyBids></PrivateRoute>

        },
        {
          path: '/bidrequests',
          element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
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