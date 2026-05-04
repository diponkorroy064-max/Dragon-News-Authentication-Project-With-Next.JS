import Link from "next/link";
import userAvatar from '@/assets/user.png';
import Image from "next/image";
import Navlink from "./Navlink";


const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between items-center mt-8 px-10">
            <div></div>

            <ul className="flex justify-between items-center gap-3 text-gray-700">
                <li><Navlink href="/">Home</Navlink></li>
                <li><Navlink href="/about">About</Navlink></li>
                <li><Navlink href="/career">Career</Navlink></li>
            </ul>

            <div className="flex justify-end items-center">
                <Image src={userAvatar} alt={"user avatar"} width={40} height={40} className="rounded-full" />
                
                <button className="btn bg-pink-500 text-white ml-4"><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;
