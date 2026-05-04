import Image from "next/image";
import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const NewsCard = ({ singleNews }) => {
    // console.log(singleNews);

    return (
        <div className="card bg-base-100 shadow-sm card-body">
            <div className="flex justify-between items-center bg-gray-200 p-2 rounded-md">
                <div className="flex gap-2">
                    <div>
                        <Image src={singleNews.author?.img} alt={singleNews?.details} width={50} height={50} className="rounded-full"/>
                   </div>
                    <div>
                        <h2>{singleNews.author?.name}</h2>
                        <h2>{singleNews.author?.published_date}</h2>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <h1><FaShareAlt /></h1>
                    <h1><FaBookmark /></h1>
                </div>
            </div>

            <div className="">
                <h2 className="card-title">{singleNews.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>

            <figure>
                <Image src={singleNews.image_url} alt={singleNews.title} width={300} height={300} className="w-full"/>
            </figure>

            <p className="text-[12px] line-clamp-2">{singleNews.details}</p>

            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <h2 className="flex gap-1 text-orange-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                    <h2>{singleNews.rating.number}</h2>
                </div>
                <Link href={`/news/${singleNews._id}`}><button className="btn btn-primary">See Details</button></Link>
            </div>
        </div>
    );
};

export default NewsCard;
