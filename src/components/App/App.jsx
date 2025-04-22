import Profile from "../Profile/Profile";
import userData from "../../jsonData.json";
import "./App.module.css";
import React from 'react';
import friendsData from "D:/Projects/goit-react-hw-01/src/friendsData.json";
import FriendList from "../FriendList/FriendList";

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