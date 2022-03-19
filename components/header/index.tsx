import React, { Fragment, forwardRef, DetailedHTMLProps } from "react";
import {
  HeaderItemsCollection,
  HeaderContainer,
  ImgContainerHeader,
  ImgContainerMobile,
  InputContainer,
  InputSpacing,
  SearchIconContainer,
  InputDefault,
  IconsContainer,
  MessageNotifier,
} from "./styles";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ImportImgState } from "../../store/Modals";
import { useRecoilState } from "recoil";

// class f(x) for list modal items
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { data: session } = useSession();

  const route = useRouter();

  const [isModalOpen, setIsModalOpen] = useRecoilState(ImportImgState);

  return (
    <HeaderContainer>
      <HeaderItemsCollection>
        {/* left */}
        <ImgContainerHeader>
          <Image
            src="https://engineering-hub.vercel.app/engineering-hub.png"
            layout="fill"
            objectFit="contain"
            onClick={() => route.push("/")}
          />
        </ImgContainerHeader>

        <ImgContainerMobile>
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </ImgContainerMobile>
        {/* search field */}
        <InputContainer>
          <InputSpacing>
            <SearchIconContainer>
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </SearchIconContainer>
            <InputDefault type="text" placeholder="Search" />
          </InputSpacing>
        </InputContainer>

        {/* right */}
        <IconsContainer>
          <HomeIcon className="navBtn" onClick={() => route.push("/")} />

          <MenuIcon className="h-12 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn" />
                <MessageNotifier>3</MessageNotifier>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setIsModalOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <img
                      src={session?.user?.image}
                      alt="icon on engineering hub"
                      className="h-10 cursor-pointer rounded-full"
                    />
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-index:1010">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}>
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}>
                            Support
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={signOut}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full text-left px-4 py-2 text-sm"
                            )}>
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          ) : (
            <>
              <button onClick={signIn}>Sign In</button>
            </>
          )}
        </IconsContainer>
      </HeaderItemsCollection>
    </HeaderContainer>
  );
};

export default Header;
