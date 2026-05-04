'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm(); 
    console.log("form errors", errors);
    // console.log("form watch", watch("name"), watch("photo"), watch("email"), watch("password"));

    const registerHandler = (data) => {
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log("email", email);
        // console.log('password', password);

        console.log("form data", data);

        const { name, photo, email, password } = data;
        console.log("name", name, "photo", photo, "email", email, "password", password);
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

                    <label className="font-semibold">Password</label>
                    <input name="password" type="password" className="input" placeholder="Enter your Password" {...register("password", { required: true })} />
                    {errors.password && <span className="text-red-500 text-[12px]">Password is required</span>}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>

        </div>
    );
};

export default RegisterPage;

