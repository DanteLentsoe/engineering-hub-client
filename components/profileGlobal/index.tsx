import React from "react";

const ProfileGlobal = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://avatars.githubusercontent.com/u/65385487?v=4"
        alt="engineering hub loggedin user profile picture"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Dante Lentsoe</h2>
        <h3 className="text-sm text-gray-500 ">Welcome to Engineering Hub</h3>
      </div>
      <button className="text-teal-800 text-sm font-bold">Sign out</button>
    </div>
  );
};

export default ProfileGlobal;
