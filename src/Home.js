import React, { useContext } from "react";
import { AppContext } from "./context";

function Home() {
  const { user } = useContext(AppContext);
  const {
    displayName,
    photoURL,
    email,
    profile: { last_name, birthday },
  } = user;

  return (
    <div className="home">
      <div className="home_container">
        <div className="avatar">
          <img src={photoURL} alt="ima" className="avatar" />
        </div>
        <h2 className="name">
          {displayName} {last_name}
        </h2>
        {birthday && <h2>{birthday}</h2>}
        {email && <h2>{email}</h2>}
      </div>
    </div>
  );
}

export default Home;
