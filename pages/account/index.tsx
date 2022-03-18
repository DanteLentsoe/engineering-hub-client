import React from "react";
import Header from "../../components/header";
// import {} from "./styles";

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
const AccountPage = ({ providers }: IProviders) => {
  return (
    <div>
      <Header />{" "}
    </div>
  );
};

export default AccountPage;
