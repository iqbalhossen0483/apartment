import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./LoginRegister.css";

interface State {
  from: From;
}
interface From {
  pathname: string;
}

const LoginRegister = () => {
  const { handleSubmit, register, reset } = useForm<userLogin>();
  const [login, setLogin] = useState<boolean>(true);
  const navigate = useNavigate();
  const firebase = useFirebase();
  const location = useLocation();

  const state = location.state as State;
  let redirectUrl = state?.from?.pathname || "/";

  function onSubmit(data: userLogin) {
    if (!login) {
      firebase?.signUpWithEmail(data.email, data.passwoard).then((result) => {
        if (result.user) {
          firebase?.addUserName(data.name);
          const dataForDb = {
            displayName: data.name,
            email: data.email,
            role: "user",
          };
          firebase?.createUser(dataForDb);
          reset();
          navigate(redirectUrl);
        }
      });
    } else {
      firebase
        ?.loginWithEmail(data.email, data.passwoard)
        .then((result) => {
          reset();
          navigate(redirectUrl);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  //google login
  function googleLogin() {
    firebase?.loginWithGoolge().then((result) => {
      if (result.user) {
        const dataForDb = {
          displayName: result.user.displayName,
          email: result.user.email,
          role: "user",
        };
        firebase?.createUser(dataForDb);
        navigate(redirectUrl);
      }
    });
  }

  function handlelogIn() {
    if (login) setLogin(false);
    else setLogin(true);
  }
  return (
    <div className='px-5 md:px-0'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-[400px]'>
        <h2>Please{login ? " Login" : " Register"}</h2>

        {!login && (
          <>
            <p>Name:</p>
            <input
              {...register("name", { required: true })}
              placeholder='Your name'
              type='text'
            />
          </>
        )}

        <p>Email:</p>
        <input
          {...register("email", { required: true })}
          placeholder='Your email'
          type='emial'
        />
        <p>Passwoard:</p>
        <input
          {...register("passwoard", { required: true })}
          placeholder='Your passwoard'
          type='password'
        />
        <button className='btn' disabled={firebase?.loading}>
          {login ? "Login" : "Register"}
        </button>
        <p className='col-span-3 text-center mt-5 mb-2'>
          ---------- Or --------
        </p>
        <button onClick={googleLogin} className='btn'>
          Google
        </button>

        <p className='col-span-3 text-center mt-5 text-sm'>
          {login ? "New here?" : "Already have a account?"}{" "}
          <span onClick={handlelogIn} className='text-primary cursor-pointer'>
            {login ? "Create an account" : "Login here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginRegister;
