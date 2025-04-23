import React from 'react';
import styles from "./App.module.css"; 
import userData from "../../jsonData.json";
import friendsData from "../../friendsData.json";
import transactions from "../../transactions.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
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