'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    // console.log("form errors", errors);
    // console.log("form watch", watch("email"), watch("password"));

    const loginHandler = async (data) => {
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log("email", email);
        // console.log('password', password);

        // console.log("form data", data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log("login response", res, error);

        if (error) {
            // alert("Registration failed: " + error.message);
            toast.error("Login failed: " + error.message);
        }
        else if (res) {
            // alert("Registration successful! Please check your email to verify your account.");
            toast.success("Login successful!");
        }
    };


    return (
        <div className="container mx-auto flex flex-col justify-center items-center">

            <form onSubmit={handleSubmit(loginHandler)}>

                <h2 className="text-2xl text-center font-bold py-4">Login your account</h2>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border px-4 py-8">

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Enter your Email Address" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-[12px]">Email is required</span>}

                    <fieldset className="relative">
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Enter your Password" {...register("password", { required: true })} />

                        <span className="absolute right-2 top-7 cursor-pointer text-xl" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <span className="text-red-500 text-[12px]">Password is required</span>}
                    </fieldset>

                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className="text-sm text-center mt-4">
                        Do not Have An Account ? <Link href="/register" className="text-red-500 hover:underline">Register</Link>
                    </p>
                </fieldset>
            </form>

        </div>
    );
};

export default LoginPage;
