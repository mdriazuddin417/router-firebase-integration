import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div>
        <h2>Knock Knock ! who is there</h2>
        <p>{user ? user.displayName : "Voooot"}</p>
      </div>
    </div>
  );
};

export default Products;
