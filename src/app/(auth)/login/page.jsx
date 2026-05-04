

const LoginPage = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center py-8">

            <h2 className="text-2xl font-bold py-12">Login Here</h2>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                
                {/* <legend className="text-2xl font-bold">Login</legend> */}

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    );
};

export default LoginPage;