import { useEffect, useState } from "react";

const LeftNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('/public/news.json')
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])
    
    return (
        <div>
            {
                 news.map(newspaper =>
                 
                 <div key={newspaper._id} className="mt-5">

                        <img src={newspaper.image_url} alt=" " />
                        <p>{newspaper.title}</p>

                    </div>
                    


                )
            }

        </div >
    );
};

export default LeftNews;