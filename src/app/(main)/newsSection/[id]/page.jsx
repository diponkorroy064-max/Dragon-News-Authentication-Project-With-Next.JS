import AllCateSection from "@/components/homeComponent/allCateSection/AllCateSection";
import NewsCard from "@/components/homeComponent/NewsCard";
import SocialSection from "@/components/homeComponent/socialSection/SocialSection";
import { fetchingCategoryData, fetchingNewsDataById } from "@/lib/data";


const NewsSectionPage = async ({ params }) => {
    const { id } = await params;
    console.log("category id from url", id);

    const categories = await fetchingCategoryData();
    // console.log(categories);
    const allCategories = categories?.news_category;
    // console.log(allCategories);

    const news = await fetchingNewsDataById(id);
    // console.log("array of news", news);


    return (
        <div className="container mx-auto my-12 px-10">

            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                    <AllCateSection allCategories={allCategories} activeId={id}></AllCateSection>
                </div>

                <div className="col-span-2">
                    <h1 className="text-2xl font-bold mb-2">All News</h1>
                    <div className="flex flex-col gap-3">
                        {
                            news.length > 0 ? (news?.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews} ></NewsCard>)
                            ) : (<p className="text-gray-600">No news found for this category.</p>)
                        }
                    </div>
                </div>

                <div className="col-span-1">
                    <SocialSection></SocialSection>
                </div>

            </div>

        </div>
    );
};

export default NewsSectionPage;

