import Marquee from "react-fast-marquee";

const news = [
    { id: 1, title: "The quick brown fox jumps over the lazy dog." },
    { id: 2, title: "Artificial intelligence is transforming the modern world." },
    { id: 3, title: "A journey of a thousand miles begins with a single step." }
];

const BreakingNews = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center gap-4 px-3 py-4 bg-gray-300">
                <button className="btn bg-pink-500 text-white">Latest News</button>
                <Marquee pauseOnHover={true} speed={100} >
                    {news.map((item) => (
                        <span key={item.id} className="mx-2">
                            {item.title}
                        </span>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;
