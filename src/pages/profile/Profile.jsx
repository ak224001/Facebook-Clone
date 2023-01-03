import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopImages">
              <img
                src="/assets/post/3.jpeg"
                alt="coverPic"
                className="profileCover"
              />
              <img
                src="/assets/person/10.jpeg"
                alt="coverPic"
                className="profilePhoto"
              />
            </div>
            <div className="profileInfo">
              <span className="profileName">Kristen Thomas</span>
              <span className="profileDescription">
                Hello there! Welcome to new world.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
