import { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { PostType, Users } from "../../dummyData";
import "./post.css";

export default function Post(post: PostType) {
    console.log("post:", post);
    const { id, date, comment, photo, desc, userId } = post;

    const { username, profilePicture } = Users.filter((u) => u.id === userId)[0];

    const [like, setLike] = useState(post.like);
    const [liked, setLiked] = useState(false);

    const likeHandler = () => {
        setLike(liked ? like - 1 : like + 1);
        setLiked(!liked);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={profilePicture} alt="" className="profileImage" />
                        <span className="postUsername">{username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={photo} alt="" className="postImage" />
                </div>
                <div className="container1">
                    <div className="container1">
                        <img src="/assets/like.png" alt="" className="icon1" onClick={likeHandler} />
                        <img src="/assets/love.png" alt="" className="icon1" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
