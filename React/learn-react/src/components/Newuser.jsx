import { useEffect, useState } from "react";
import Login from "./login";

const Newuser = () => {
  const [isloggedIn, SetisLoggedIn] = useState(true);

  useEffect(() => {
    console.log("You logged in");
  });

  useEffect(() => {
    console.log("Page Loadeds");
  }, []);

  useEffect(() => {
    if (isloggedIn) {
      console.log("You logged in");
    } else {
      console.log("You logged out");
    }
  }, [isloggedIn]);

  return (
   <div>
    <h1>Dashboard</h1>
     <button
      onClick={() => {
        SetisLoggedIn(false);
      }}
    >
      {isloggedIn ? "Logout" : "Login"}
    </button>
   </div>
  );
};

export default Newuser;
