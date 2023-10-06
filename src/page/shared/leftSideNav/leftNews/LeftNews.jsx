import { useEffect, useState } from "react";

const LeftNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])
    
    return (
        <div>
            {
                 news.map(newspaper =>
                 
                 <div key={newspaper._id} className="mt-5 p-3">

                        <img src={newspaper.image_url} alt=" " />
                        <p className="text-[#403F3F] mt-3 text-xl font-medium">{newspaper.title}</p>
                        <div className="mt-5">
                            <p className="text-[#403F3F] font-blod">Sports</p>
                        </div>
                    </div>
                    


                )
            }

        </div >
    );
};

export default LeftNews;