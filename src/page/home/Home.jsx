import { useLoaderData } from "react-router-dom";
import Hader from "../shared/header/Hader";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import NewsCard from "../shared/nesCard/NewsCard";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
 
    const news = useLoaderData()

    return (
        <div>
            <Hader></Hader>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LeftSideNav></LeftSideNav>
                <div className="col-span-2">
                <h1 className="text-2xl font-bold mb-5 p-2 text-[#403F3F] ">Dargon News</h1>
                {
                    news.map(aNews=> <NewsCard key={aNews._id} aNews={aNews} ></NewsCard>)
                }
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Home;