import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import NoPostsSVG from "../../assets/SVGS/NoPostsSVG";
import { db } from "../../firebase/firebase";
import SinglePost from "../post";
import { EmptyPostsContainer } from "./styles";
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
  const [posts, setPosts] = useState<
    Array<IPost> | QueryDocumentSnapshot<DocumentData>[]
  >([]);

  console.log("POSTS ", posts);

  useEffect(
    // limit real time listeners
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          console.log("SNAPSHOTS ", snapshot);
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post: IPost | QueryDocumentSnapshot<DocumentData>) => (
          <SinglePost
            key={post.id}
            id={post.id}
            username={post.data().username}
            img={post.data().image}
            caption={post.data().caption}
            userImg={post.data().profileImg}
          />
        ))
      ) : (
        <EmptyPostsContainer>
          <NoPostsSVG />
        </EmptyPostsContainer>
      )}
    </div>
  );
};

export default Posts;
