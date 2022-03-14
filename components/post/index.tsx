import React, { useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

import {
  SinglePostContianer,
  PostHeaderContainer,
  PostHeaderImg,
  PostUserName,
  PostImg,
  PostButtonsContainer,
  ButtonsWrapper,
} from "./styles";

interface IPost {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption?: string;
}
const SignlePost = ({ id, username, userImg, img, caption }: IPost) => {
  return (
    <SinglePostContianer>
      {/* post header s */}
      <PostHeaderContainer>
        <PostHeaderImg src={userImg} alt="" />
        <PostUserName>{username}</PostUserName>
        <DotsHorizontalIcon className="h-5" />
      </PostHeaderContainer>

      {/* post img */}
      <PostImg src={img} alt="" />
      {/*  post buttons*/}

      <PostButtonsContainer>
        <ButtonsWrapper>
          <HeartIcon className="chat-btn" />
          <ChatIcon className="chat-btn" />
          <PaperAirplaneIcon className="chat-btn" />
          <HeartIconSolid className="chat-btn" />
        </ButtonsWrapper>
        <BookmarkIcon className="chat-btn" />
      </PostButtonsContainer>
      {/*  */}
      {/* captions */}
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add comment..."
          className="flex-1 border-none focus:ring-0"
        />
        <button className="font-semibold text-teal-800">Post</button>
      </form>
    </SinglePostContianer>
  );
};

export default SignlePost;
