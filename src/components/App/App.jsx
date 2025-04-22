import Profile from "../Profile";
import userData from "../../jsonData.json";
import "./App.module.css";
import React from 'react';
import friendsData from "../../friendsData.json";
import FriendList from "../FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
    </>
  );
};

export default App;