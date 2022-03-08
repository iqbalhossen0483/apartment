import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const LoginRegister = () => {
    const { handleSubmit, register, reset } = useForm<userLogin>();
    const [login, setLogin] = useState<boolean>(true);
    const navigate = useNavigate();
    const { loginWithGoolge, signUpWithEmail, addUserName, loading, loginWithEmail } = useFirebase();

    function onSubmit(data: userLogin) {
        if (!login) {
            signUpWithEmail(data.email, data.passwoard)
                .then(result => {
                    addUserName(data.name);
                    reset();
                    navigate("/");
                })
        }
        else {
            loginWithEmail(data.email, data.passwoard)
                .then(result => {
                    reset();
                    navigate("/");
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    }

    //google login
    function googleLogin() {
        loginWithGoolge()
            .then(result => {
                navigate("/");
            })
    }

    function handlelogIn() {
        if (login) setLogin(false);
        else setLogin(true);
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-2/5">
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
                <button disabled={loading}>
                    {login ? "Login" : "Register"}
                </button>
                <p className='col-span-3 text-center mt-5 mb-2'>
                    ---------- Or --------
                </p>
                <i
                    onClick={googleLogin}
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