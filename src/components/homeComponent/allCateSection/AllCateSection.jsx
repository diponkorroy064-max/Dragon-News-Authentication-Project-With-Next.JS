import Link from "next/link";

const AllCateSection = ({ allCategories, activeId }) => {
    // console.log(activeId);
    // console.log("all categories", allCategories);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">All categories</h1>

            <div>
                <ul>
                {
                    allCategories?.map(category => <li className={`flex flex-col p-2 rounded-md font-semibold text-center border border-gray-300 mb-1.5 ${activeId === category.category_id && 'bg-blue-500 text-white'}`} key={category.category_id}>
                        <Link href={`/newsSection/${category.category_id}`}>{category.category_name}</Link> 
                    </li>)
                }
                </ul>
            </div>
        </div>
    );
};

export default AllCateSection;

