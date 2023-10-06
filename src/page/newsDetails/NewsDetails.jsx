import Hader from "../shared/header/Hader";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import { BsArrowLeft, BsCalendar4 } from 'react-icons/bs';
import Navbar from "../shared/navbar/Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";
import moment from "moment";

const NewsDetails = () => {
    const newsCards = useLoaderData();
    const { _id } = useParams()
    const idInt = parseInt(_id)
    const newsCard = newsCards.find(newsCard => newsCard._id === idInt)
    const { details, image_url, title, author } = newsCard;
    return (
        <div>
            <Hader></Hader>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="lg:col-span-3 md:col-span-2 ">
                    <div className="order-1 bg-base-100 shadow-xl text-[#403F3F] p-10 space-y-6 border">
                        <div className='flex items-center gap-5'>
                            <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                            <div>
                                <h1 className='text-lg font-bold'>{author.name}</h1>
                                <p>{moment().format("YYYY-M-D ")}</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="card-title">{title}</h2>
                        </div>
                        <figure><img src={image_url} /></figure>


                        <p className="text-[#403F3F] text-sm">{details}</p>
                        <Link to='/'>
                            <button className=" flex items-center gap-2 p-4 text-white hover:bg-[#D72050] border-0 mt-5 btn-outline bg-[#D72050]"><BsArrowLeft className="font-bold text-2xl"></BsArrowLeft > All news in this category</button>
                        </Link>

                    </div>
                    <div className="mt-10 p-4 order-3">
                        <h1 className="text-[#403F3F] font-bold mb-5 text-2xl">Editors Insight</h1>
                        <div className=" gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                            <div className="space-y-3">
                                <div className="md:w-[267px] w-[320px] h-[160px] bg-[#D9D9D9]">

                                </div>
                                <p className="font-bold text-lg text-[#403F3F]">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                <div className='flex gap-3 items-center'>
                                    <BsCalendar4></BsCalendar4>
                                    <p>{moment().format("YYYY-M-D ")}</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="md:w-[267px] w-[320px] h-[160px] bg-[#D9D9D9]">

                                </div>
                                <p className="font-bold text-lg text-[#403F3F]">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                <div className='flex gap-3 items-center'>
                                    <BsCalendar4></BsCalendar4>
                                    <p>{moment().format("YYYY-M-D ")}</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="md:w-[267px] w-[320px] h-[160px] bg-[#D9D9D9]">

                                </div>
                                <p className="font-bold text-lg text-[#403F3F]">21 The Most Stylish Wedding Guest Dresses For Spring</p>
                                <div className='flex gap-3 items-center'>
                                    <BsCalendar4></BsCalendar4>
                                    <p>{moment().format("YYYY-M-D ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1 order-2">
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default NewsDetails;