import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import EngineeringFeed from "../engineeringFeed";
import { SharedFeedContainer } from "./styles";
import { useSession } from "next-auth/react";
const SharedFeed = () => {
  const [feedInfo, setFeedInfo] = useState<[] | Array<object>>([]);

  const { data: session } = useSession();

  useEffect(() => {
    //load set data
    const feedInfoFaker = [...Array(16)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));

    setFeedInfo(feedInfoFaker);
  }, []);

  return (
    <SharedFeedContainer>
      {session && (
        <EngineeringFeed
          img={session?.user?.image}
          username={session?.user?.name}
        />
      )}
      {feedInfo.map((userProfile: any) => (
        <EngineeringFeed
          key={userProfile.id}
          img={userProfile.avatar}
          username={userProfile.username}
        />
      ))}
    </SharedFeedContainer>
  );
};

export default SharedFeed;
