import "./online.css";

export default function Online({ user }) {
  return (
    <div className="rightbarFriend">
      <img
        src={user.profilePicture}
        alt="friend1"
        className="rightbarFriendImg"
      />
      <span className="status">●</span>
      <span className="rightbarFriendName">{user.username}</span>
    </div>
  );
}
