import React from "react";
import useFirebase from "../../hooks/useFirebase";

const LogIn = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3>Please Log in</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google SignIn</button>
      </div>
      <br />
      <form action="">
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LogIn;
