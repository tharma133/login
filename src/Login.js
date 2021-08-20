/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FcGoogle } from "react-icons/fc";
import { auth, provider, googleProvider } from "./firebase";
import { AppContext } from "./context.js";
import { useHistory } from "react-router-dom";

function Login() {
  const { setUser } = useContext(AppContext);
  const history = useHistory();

  const firebaseLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // var user = result.user;

        setUser({ ...result.additionalUserInfo, ...result.user });
        history.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        setUser({ ...result.additionalUserInfo, ...result.user });
        history.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    setUser([]);
  }, []);

  return (
    <div className="main">
      <h3>Login</h3>
      <hr />

      <div className="container">
        <button onClick={firebaseLogin}>
          <FacebookIcon />
          <p>Sign in with facebook</p>
        </button>
        <button onClick={googleLogin}>
          <FcGoogle />
          <p>Sign in with google</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
