import React, { useState, useEffect } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import SingleComment from "../comments";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import {
  SinglePostContianer,
  PostHeaderContainer,
  PostHeaderImg,
  PostUserName,
  PostImg,
  PostButtonsContainer,
  ButtonsWrapper,
} from "./styles";
import { db } from "../../firebase/firebase";

interface IPost {
  id?: string;
  username: string;
  userImg: string;
  img: string;
  caption?: string;
}

interface IComment {
  data: () => {
    username: string;
    image: string;
    profileImg: string;
    comment: string;
  };
  id: string;
}
const SinglePost = ({ id, username, userImg, img, caption }: IPost) => {
  const { data: session } = useSession();

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState([]);

  // get comments from DB
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );

  const setCommentHandler = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const commentBeingSent = comment;
    setComment("");

    // add comment to db
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentBeingSent,
      username: session?.user?.name,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <SinglePostContianer>
      {/* post header s */}
      <PostHeaderContainer>
        <PostHeaderImg src={userImg} alt="engineering hub post image" />
        <PostUserName>{username}</PostUserName>
        <DotsHorizontalIcon className="h-5" />
      </PostHeaderContainer>

      {/* post img */}
      <PostImg src={img} alt="" />
      {/*  post buttons*/}

      <PostButtonsContainer>
        {session && (
          <>
            <ButtonsWrapper>
              <HeartIcon className="chat-btn" />
              <ChatIcon className="chat-btn" />
              <PaperAirplaneIcon className="chat-btn" />
              <HeartIconSolid className="chat-btn" />
            </ButtonsWrapper>
            <BookmarkIcon className="chat-btn" />
          </>
        )}
      </PostButtonsContainer>
      {/*  */}
      {/* captions */}
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>
      {/* comments */}

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-teal-800 scrollbar-thin">
          {comments.map((comment: IComment) => {
            return (
              <>
                <SingleComment
                  key={comment.id}
                  id={comment.id}
                  comment={comment.data().comment}
                  username={comment.data().username}
                  userImg={comment.data().profileImg}
                />
              </>
            );
          })}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setComment(event.target.value)
            }
            placeholder="Add comment..."
            className="flex-1 border-none focus:ring-0"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={(event: any) => setCommentHandler(event)}
            className="font-semibold text-teal-800">
            Post
          </button>
        </form>
      )}
    </SinglePostContianer>
  );
};

export default SinglePost;
