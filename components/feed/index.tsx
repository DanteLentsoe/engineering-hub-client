import React from "react";
import SharedFeed from "../sharedFeed";
import { FeedContianer } from "./styles";
import Posts from "../posts";
import ProfileGlobal from "../profileGlobal";
import Suggestions from "../suggestions";
import { useSession } from "next-auth/react";
const Feed = () => {
  const { data: session } = useSession();
  return (
    <FeedContianer className={`${!session && "!grid-cols-1 !max-w-3xl"}`}>
      <section className="col-span-2">
        {/* <SharedFeed /> */}
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
