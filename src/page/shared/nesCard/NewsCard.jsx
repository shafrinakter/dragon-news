import moment from 'moment';
import PropTypes from 'prop-types'
import { AiOutlineEye } from 'react-icons/ai';
import { BsBookmark,BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const NewsCard = ({ aNews }) => {
    const { title, author, image_url, details, _id, rating, total_view } = aNews;
    return (

        <div>

            <div className="p-2">
                <div className="bg-base-100 shadow-xl text-[#403F3F] p-10 space-y-6 border">
                    <div className='flex items-center justify-between gap-5'>
                        <div className='flex items-center gap-3'>
                            <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                            <div>
                                <h1 className='text-lg font-bold'>{author.name}</h1>
                                <p>{moment().format("YYYY-M-D ")}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <BsBookmark></BsBookmark>
                            <BsShare></BsShare>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <figure><img src={image_url} /></figure>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <br />
                            <Link to={`/newsdetail/${_id}`}
                                className='text-[#FF8C47]'>Read More...</Link> </p> :
                            <p>{details}</p>
                    }
                    <hr />
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <div className="rating rating-sm space-x-2">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-sm font-semibold'>{rating.number}</p>
                            </div>

                            <div>
                                <div className='flex items-center gap-1'>
                                    <AiOutlineEye className='text-2xl'></AiOutlineEye>
                                    <p className='font-semibold texl-lg'>{total_view}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
NewsCard.propTypes = {
    aNews: PropTypes.object,
}
export default NewsCard;