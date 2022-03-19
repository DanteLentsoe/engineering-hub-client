import React from "react";
import { signOut, useSession } from "next-auth/react";
import { PersonalProfileContainer, PersonalProfileImg } from "./styles";

const ProfileGlobal = () => {
  const { data: session } = useSession();

  return (
    <PersonalProfileContainer>
      {session && (
        <>
          <PersonalProfileImg
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
    </PersonalProfileContainer>
  );
};

export default ProfileGlobal;
