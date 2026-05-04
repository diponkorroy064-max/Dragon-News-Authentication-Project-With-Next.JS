import { BsGoogle } from "react-icons/bs";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";





const SocialSection = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Login With</h1>

            <div className="space-y-3">
                <button className="btn text-blue-500 bg-white border border-blue-500 hover:bg-blue-100"><BsGoogle /> Login With Google</button>
                <button className="btn text-green-800 bg-white border border-green-500 hover:bg-green-100"><FaGithub /> Login With GitHub</button>
            </div>

            <h1 className="text-2xl font-bold mb-2 mt-10">Finds Us On</h1>

            <div className="flex flex-col">
                <button className="btn py-6 bg-white border rounded-none border-gray-500 hover:bg-gray-300"><FaFacebookF className="border border-gray-500 rounded-full p-1 bg-gray-300 text-3xl" /> Facebook</button>
                <button className="btn py-6 bg-white border rounded-none border-gray-500 hover:bg-gray-300"><FaTwitter className="border border-gray-500 rounded-full p-1 bg-gray-300 text-3xl" /> Twitter</button>
                <button className="btn py-6 bg-white border rounded-none border-gray-500 hover:bg-gray-300"><FaInstagram className="border border-gray-500 rounded-full p-1 bg-gray-300 text-3xl" /> Instagram</button>
            </div>
        </div>
    );
};

export default SocialSection;

