import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "./Online";

export default function Rightbar({ profile }) {
  const ProfileRightBar = () => {
    return (
      <>
        <div className="rightbarContainer">
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoItemKey">City:</span>
              <span className="rightbarInfoItemValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoItemKey">From:</span>
              <span className="rightbarInfoItemValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoItemKey">Relationship:</span>
              <span className="rightbarInfoItemValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="assets/person/1.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/2.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/3.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/4.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/5.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/6.jpeg"
                alt="followers image"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carten</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="rightbarContainer">
          <div className="birthdayConatiner">
            <img
              src="/assets/gift.png"
              className="bithdayImg"
              alt="bithdayImg"
            />
            <span className="birthdayText">
              <strong>Pola Foster</strong> and <strong>3 other friends </strong>
              have a birthday today.
            </span>
          </div>
          <img src="/assets/birthdayAd.jpg" alt="ad" className="rightbarAd" />
          <h4 className="onlineFriends">Online Friends</h4>
          <div className="rightbarFriendList">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return <>{profile ? <ProfileRightBar /> : <HomeRightBar />}</>;
}
