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
  setDoc,
  doc,
  deleteDoc,
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
    timestamp: {
      toDate: () => any;
    };
  };
  id: string;
}
const SinglePost = ({ id, username, userImg, img, caption }: IPost) => {
  const { data: session } = useSession();

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [postLiked, setPostLiked] = useState<boolean | number>(false);

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
    [db, id]
  );

  // get likes from DB
  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      // match user like to DB like
      setPostLiked(
        likes.findIndex((like) => like.id === session?.user?.email) !== -1
      ),
    [likes]
  );

  const likePostHandler = async () => {
    if (postLiked as Boolean) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.email));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.email), {
        username: session?.user?.name,
      });
    }
  };

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
              {postLiked ? (
                <>
                  <HeartIconSolid
                    className="chat-btn text-red-500"
                    onClick={() => {
                      likePostHandler();
                    }}
                  />
                </>
              ) : (
                <>
                  <HeartIcon
                    className={`chat-btn`}
                    onClick={() => {
                      likePostHandler();
                    }}
                  />
                </>
              )}

              <ChatIcon className="chat-btn" />
              <PaperAirplaneIcon className="chat-btn" />
            </ButtonsWrapper>
            <BookmarkIcon className="chat-btn" />
          </>
        )}
      </PostButtonsContainer>
      {/*  */}
      {/* captions */}
      <p className="truncate p-5">
        {likes.length > 0 && (
          <>
            <p className="font-bold mb-1">{likes.length} likes</p>
          </>
        )}
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
                  timestamp={comment.data().timestamp?.toDate()}
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
