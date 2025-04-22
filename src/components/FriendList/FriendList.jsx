import PropTypes from "prop-types";


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <><div>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p><span
                    className={`w-4 h-4 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"}`}
                ></span></p>
        </div>
        </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
      <ul>
          <li>
              {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))};
          </li>
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
