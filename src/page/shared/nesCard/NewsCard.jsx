import moment from 'moment';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const NewsCard = ({ aNews }) => {
    const { title, author, image_url, details, _id } = aNews;
    return (

        <div>
           
            <div className="p-2">
                <div className="bg-base-100 shadow-xl text-[#403F3F] p-10 space-y-6 border">
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
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <br />
                            <Link to={`/newsdetail/${_id}`}
                                className='text-[#FF8C47]'>Read More...</Link> </p> :
                            <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};
NewsCard.propTypes = {
    aNews: PropTypes.object,
}
export default NewsCard;