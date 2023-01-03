import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
export default function Feed() {
  return (
    <div className="feedConatiner">
      <Share />
      {Posts.map((item) => {
        return <Post key={item.id} post={item} />;
      })}
    </div>
  );
}
