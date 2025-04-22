import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default TransactionHistory;

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};