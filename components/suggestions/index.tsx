import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
const Suggestions = () => {
  const [suggestionInfo, setSuggestionInfo] = useState<[] | Array<object>>([]);
  useEffect(() => {
    //load set data

    const feedInfoFaker = [...Array(6)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));

    console.log(feedInfoFaker);

    setSuggestionInfo(feedInfoFaker);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semi-bold">Your suggestions</h3>
        <button className="text-gray-500 font-semi-bold">See All</button>
      </div>
      {suggestionInfo.map((userProfile: any) => (
        <div
          key={userProfile.id}
          className="flex items-center justify-between mt-3">
          <img
            className="w-10 h-10 rounded-full border border-cyan-800  p-[2px]"
            src={userProfile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semi-bold text-sm">{userProfile.username}</h2>
            <h3 className="text-sm text-gray-500">
              <span className="text-teal-800 font-bold">Company</span>:{" "}
              {userProfile.company.name}
            </h3>
          </div>

          <button className="text-teal-800 text-sm font-semi-bold">
            Follow{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
