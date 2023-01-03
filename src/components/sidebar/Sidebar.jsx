import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriends/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <div className="Items">
          <div className="Item">
            <RssFeedIcon />
            <span className="feed">Feed</span>
          </div>
          <div className="Item">
            <ChatIcon />
            <span className="feed">Chats</span>
          </div>
          <div className="Item">
            <PlayCircleIcon />
            <span className="feed">Videos</span>
          </div>
          <div className="Item">
            <GroupIcon />
            <span className="feed">Groups</span>
          </div>
          <div className="Item">
            <BookmarkIcon />
            <span className="feed">Bookmarks</span>
          </div>
          <div className="Item">
            <HelpOutlineIcon />
            <span className="feed">Questions</span>
          </div>
          <div className="Item">
            <WorkOutlineIcon />
            <span className="feed">Jobs</span>
          </div>
          <div className="Item">
            <EventIcon />
            <span className="feed">Events</span>
          </div>
          <div className="Item">
            <SchoolIcon />
            <span className="feed">Courses</span>
          </div>
        </div>
        <button className="showMoreButton">Show More</button>
        <hr className="sidebarHr" />
        <div className="sidebarFriendList">
          {Users.map((user) => {
            return <CloseFriend key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}
