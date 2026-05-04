import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';



const NewsDetailsPage = async ({ params }) => {
    // console.log("news id from url", params);
    const { id } = await params;
    // console.log("news id from url after await", paramsResult);
    const newsDetails = await getNewsDetailsById(id);
    console.log("news details", newsDetails);

    return (
        <div className="card bg-base-100 shadow-sm card-body w-150 mx-auto my-12">
            <figure>
                <Image src={newsDetails?.image_url} alt={newsDetails.details} width={300} height={300} className="w-full" />
            </figure>

            <div className="">
                <h2 className="card-title">{newsDetails.title}</h2>
            </div>
            <p className="text-[12px]">{newsDetails.details}</p>

            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <h2 className="flex gap-1 text-orange-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                    {/* <h2>{newsDetails.rating.number}</h2> */}
                </div>
                <Link href={`/newsSection/${newsDetails.category_id}`}><button className="btn btn-primary">See other news in this category</button></Link>
            </div>
        </div>
    );
};

export default NewsDetailsPage;

