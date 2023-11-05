import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Hiring from "../../components/Hiring/Hiring";


const Home = () => {
    const loadedJobs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category loadedJobs={loadedJobs}></Category>
            <Hiring></Hiring>
        </div>
    );
};

export default Home;