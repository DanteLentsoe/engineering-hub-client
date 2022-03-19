import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 42rem;
  padding: 2rem;
  margin: auto;
`;

export const LoginContainer = styled.div`
  position: relative;
  font-size: 1.8rem;
  padding: 0 4rem 3rem;
  max-width: 48rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: solid 1px #ddd;
  background-color: #fff;
`;

export const UserInput = styled.input`
  display: block;
  font-size: 1.4rem;
  color: #333;
  padding: 1rem 2rem 1rem 0.5rem;
  margin: 0 5rem 1.5rem 0;
  width: 100%;
  background-color: #d6d6d610;
  border: solid 1px #aaa;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  border: solid 1px #aaa;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: #228be6;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #4ea2eb;
  }
`;

export const TitleLogo = styled.img`
  display: block;
  height: 8rem;
  width: 15rem;
  margin: auto;
  margin-bottom: 2rem;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  color: #a7a7a7;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  margin-top: 2rem;

  &:before {
    background-color: #a7a7a7;
    content: "";
    display: inline-block;
    height: 0.12rem;
    position: relative;
    vertical-align: middle;
    width: 50%;
    right: 2rem;
    margin-left: 7%;
  }

  &::after {
    background-color: #a7a7a7;
    content: "";
    display: inline-block;
    height: 0.12rem;
    position: relative;
    vertical-align: middle;
    width: 50%;
    left: 2rem;
    margin-right: 7%;
  }
`;
export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;
