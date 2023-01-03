import "./closeFriend.css";
export default function CloseFriend({ user }) {
  return (
    <div className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="friend1"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </div>
  );
}
