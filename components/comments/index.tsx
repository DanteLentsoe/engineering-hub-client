import Moment from "react-moment";
import React from "react";
interface IComment {
  id?: string;
  username: string;
  userImg: string;
  comment: string;
  timestamp?: number;
}

const SingleComment = ({
  id,
  username,
  userImg,
  comment,
  timestamp,
}: IComment) => {
  return (
    <>
      <div className="flex items-center space-x-2 mb-3">
        <img
          className="h-7 rounded-full"
          src={userImg}
          alt="Engineering hub user profile image"
        />
        <p className="text-sm flex-1">
          <span className="font-bold">{username}</span> {comment}
        </p>
        <Moment fromNow className="pr-5 text-xs">
          {timestamp}
        </Moment>
      </div>
    </>
  );
};

export default SingleComment;
