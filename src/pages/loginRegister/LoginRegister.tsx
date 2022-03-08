import { useState } from 'react';
import { useForm } from 'react-hook-form'

const LoginRegister = () => {
    const [login, setLogin] = useState<boolean>(true);
    const { handleSubmit, register, reset } = useForm<userLogin | userRegister>();

    function onSubmit(data: userLogin | userRegister) {
        console.log(data)
    }

    function handlelogIn() {
        if (login) setLogin(false);
        else setLogin(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Please{login ? " Login" : " Register"}</h2>
                
                {!login && <>
                <p>Name:</p>
                <input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    type="text"
                    />
                </>}

                <p>Email:</p>
                <input
                    {...register("email", { required: true })}
                    placeholder="Your email"
                    type="emial"
                />
                <p>Passwoard:</p>
                <input
                    {...register("passwoard", { required: true })}
                    placeholder="Your passwoard"
                    type="password"
                />
                <button>
                    {login ? "Login" : "Register"}
                </button>
                <p className='col-span-3 text-center mt-5 mb-2'>
                    ---------- Or --------
                </p>
                <i
                    className="fa fa-google col-span-3 text-center text-3xl text-primary"
                    aria-hidden="true"
                />

                <p className='col-span-3 text-center mt-5'>
                    {login ? "New here?" : "Already have a account?"}
                    <span
                        onClick={handlelogIn}
                        className='text-primary ml-3 cursor-pointer'>
                        {login ? "Create an account" : "Login here"}
                    </span>
                </p>
            </form>
        </div>
    );
}

export default LoginRegister