
import { useState } from "react";
import {useUser} from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        userName: "Marhamat",
        bio: "Smart",
      });
        setLoading(false);
    }, 1000);
  };

const handleLogout = () => {
    setUser(null);
  }



  return (
    <>
    {!user &&    <button
        onClick={handleLogin}
        className="bg-blue-500 text-white font-bold text-xl py-2 px-3"
      >
        {loading ? "Loading..." : "Login"}
      </button>}
   
      <div>{JSON.stringify(user)}</div>
      <br />
      {user &&
      <button onClick={handleLogout} className="bg-red-500 text-white font-bold text-xl py-2 px-3">Logout</button>}
    </>
  );
}

export default Profile;
