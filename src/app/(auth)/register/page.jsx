'use client';
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";


const RegisterPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    // console.log("form errors", errors);
    // console.log("form watch", watch("name"), watch("photo"), watch("email"), watch("password"));

    const registerHandler = async (data) => {
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log("email", email);
        // console.log('password', password);

        // console.log("form data", data);

        const { name, photo, email, password } = data;
        // console.log("name", name, "photo", photo, "email", email, "password", password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo, // required
            callbackURL: "/",
        });
        // console.log("signup response", res, error);

        if (error) {
            // alert("Registration failed: " + error.message);
            toast.error("Registration failed: " + error.message);
        }
        else if (res) {
            // alert("Registration successful! Please check your email to verify your account.");
            toast.success("Registration successful! Please check your email to verify your account.");
        }
    };


    return (
        <div className="container mx-auto flex flex-col justify-center items-center mb-10">

            <form onSubmit={handleSubmit(registerHandler)}>

                <h2 className="text-2xl text-center font-bold py-4">Register your account</h2>

                <fieldset className="fieldset bg-base-200 border-gray-300 rounded-box w-xs border px-4 py-8">

                    <label className="font-semibold">Name</label>
                    <input name="name" type="name" className="input" placeholder="Enter your Name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-500 text-[12px]">Name is required</span>}

                    <label className="font-semibold">Photo URL</label>
                    <input name="photo" type="text" className="input" placeholder="Enter your Photo URL" {...register("photo", { required: true })} />
                    {errors.photo && <span className="text-red-500 text-[12px]">Photo is required</span>}

                    <label className="font-semibold">Email</label>
                    <input name="email" type="email" className="input" placeholder="Enter your Email Address" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-[12px]">Email is required</span>}

                    <fieldset className="relative">
                        <label className="font-semibold">Password</label>
                        <input name="password"
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Enter your Password" {...register("password", { required: true })} />

                        <span className="absolute right-2 top-7 cursor-pointer text-xl" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <span className="text-red-500 text-[12px]">Password is required</span>}
                    </fieldset>

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>

        </div>
    );
};

export default RegisterPage;

