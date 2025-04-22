import React from 'react';
import Profile from "../Profile/Profile";
import userData from "../../jsonData.json";
import friendsData from "../../friendsData.json";
import FriendList from "../FriendList/FriendList";
import styles from "./App.module.css"; 
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <div className={styles['profile-card']}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friendsData} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;