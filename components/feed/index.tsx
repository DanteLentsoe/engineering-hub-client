import React from "react";
import SharedFeed from "../sharedFeed";
import { FeedContianer } from "./styles";
import Posts from "../posts";
import ProfileGlobal from "../profileGlobal";
import Suggestions from "../suggestions";
const Feed = () => {
  return (
    <FeedContianer>
      <section className="col-span-2">
        <SharedFeed />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:span-col-1">
        <div className="fixed top-29">
          <ProfileGlobal />
          <Suggestions />
        </div>
      </section>
    </FeedContianer>
  );
};

export default Feed;
