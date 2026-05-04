'use client';
import Link from "next/link";
import userAvatar from '@/assets/user.png';
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    // console.log("session data in navbar", session);
    const user = session?.user;
    console.log("user in navbar", user);
    // console.log("isPending in navbar", isPending);

    return (
        <div className="container mx-auto flex justify-between items-center mt-8 px-10">
            <div></div>

            <ul className="flex justify-between items-center gap-8 text-gray-700">
                <li><Navlink href="/">Home</Navlink></li>
                <li><Navlink href="/about">About</Navlink></li>
                <li><Navlink href="/career">Career</Navlink></li>
            </ul>

            <div className="flex justify-end items-center">
                {isPending? "loading..." : user ? (<>
                    <p className="mr-2 text-green-500 font-bold">{user?.name || "User"}</p>
                    <Image src={user?.image || userAvatar} alt={"user avatar"} width={40} height={40} className="rounded-full" />
                    <button className="btn bg-pink-500 text-white ml-4" onClick={async() => await authClient.signOut()}>Sign Out</button>
                </>
                ) : (<button className="btn bg-pink-500 text-white ml-4"><Link href="/login">Login</Link></button>)}
            </div>
        </div>
    );
};

export default Navbar;
