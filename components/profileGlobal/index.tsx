import React from "react";
import { signOut, useSession } from "next-auth/react";

const ProfileGlobal = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {session && (
        <>
          <img
            className="rounded-full border p-[2px] w-16 h-16"
            src={session?.user?.image}
            alt="engineering hub loggedin user profile picture"
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{session?.user?.name}</h2>
            <h3 className="text-sm text-gray-500 ">
              Welcome to Engineering Hub
            </h3>
          </div>

          <button className="text-teal-800 text-sm font-bold" onClick={signOut}>
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileGlobal;
