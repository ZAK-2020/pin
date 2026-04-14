import React from "react";
import ImageComponent from "../image/imageComponent";
import  {format} from "timeago.js"

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      {comment.user.img ? (
        <ImageComponent path={comment.user.img} alt="" />
      ) : (
        <img src="/general/noAvatar.png" alt="" />
      )}
      <div className="commentContent">
        <span className="commentUsername">{comment.user.displayName}</span>
        <p className="commentText">
          {comment.description}
        </p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
