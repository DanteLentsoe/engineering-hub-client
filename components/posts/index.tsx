import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import SinglePost from "../post";

interface IPost {
  data: () => {
    username: string;
    image: string;
    caption?: string;
    profileImg: string;
  };
  id: string;
}

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    // limit real time listeners
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );

  return (
    <div>
      {posts.map((post: IPost) => (
        <SinglePost
          key={post.id}
          id={post.id}
          username={post.data().username}
          img={post.data().image}
          caption={post.data().caption}
          userImg={post.data().profileImg}
        />
      ))}
    </div>
  );
};

export default Posts;
