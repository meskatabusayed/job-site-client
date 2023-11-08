import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Hiring from "../../components/Hiring/Hiring";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const loadedJobs = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Jobify | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category loadedJobs={loadedJobs}></Category>
            <Hiring></Hiring>
        </div>
    );
};

export default Home;