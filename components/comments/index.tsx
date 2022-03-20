interface IComment {
  id?: string;
  username: string;
  userImg: string;
  comment: string;
}

const SingleComment = ({ id, username, userImg, comment }: IComment) => {
  console.log("User Check", comment);
  return (
    <>
      <div className="flex items-center space-x-2 mb-3">
        <img
          className="h-7 rounded-full"
          src={userImg}
          alt="Engineering hub user profile image"
        />
        <p>
          <span>{username}</span> {comment}
        </p>
      </div>
    </>
  );
};

export default SingleComment;
