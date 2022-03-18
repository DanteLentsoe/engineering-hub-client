import { getProviders, signIn } from "next-auth/react";
import React from "react";
import Header from "../../components/header";

interface IProviders {
  providers: {
    github?: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };
    google: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };
  };
}
const SignInPage = ({ providers }: IProviders) => {
  return (
    <div>
      <Header />{" "}
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center">
        <img
          className="w-60"
          src="https://engineering-hub.vercel.app/engineering-hub.png"
          alt=""
        />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-teal-800 rounded-full text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  //get intialzed providers
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignInPage;
