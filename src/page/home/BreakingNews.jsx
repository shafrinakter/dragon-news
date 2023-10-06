import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex items-center justify-center border p-3 mb-7 bg-[#F3F3F3]">
            <button className="bg-[#D72050] btn capitalize text-white hover:bg-[#D72050]">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="font-semibold text-lg mr-8"> I can be a React component, multiple React components, or just some text.
                </p>
                <p className="font-semibold text-lg mr-8"> I can be a React component, multiple React components, or just some text.
                </p>
                <p className="font-semibold text-lg mr-8"> I can be a React component, multiple React components, or just some text.
                </p>
            </Marquee>

        </div>
    );
};

export default BreakingNews;