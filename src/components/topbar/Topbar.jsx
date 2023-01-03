import {
  Chat,
  NotificationAdd,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <span className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </span>
          <span className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">4</span>
          </span>
          <span className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </span>
        </div>
        <div className="topbarProfile">
          <img
            src="/assets/person/1.jpeg"
            alt="profile"
            className="topbarProfileLogo"
          />
        </div>
      </div>
    </div>
  );
}
