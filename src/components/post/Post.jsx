import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.css";
import { Users } from "../../dummyData";
export default function Post({ post }) {
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            src={Users.filter((u) => u.id === post.id)[0]?.profilePicture}
            alt="post profile"
            className="postProfile"
          />
          <span className="postProfileName">
            {Users.filter((u) => u.id === post.id)[0]?.username}
          </span>
          <span className="postTime">{post.date}</span>
        </div>
        <div className="postTopRight">
          <MoreVertIcon className="postMoreIcon" />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img src={post.photo} alt="post image" className="postImage" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <ThumbUpIcon htmlColor="blue" className="postLikeItem" />
          <FavoriteIcon htmlColor="red" className="postLikeItem" />
          <span className="postLikeCounter">{post.like} people liked it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
}
