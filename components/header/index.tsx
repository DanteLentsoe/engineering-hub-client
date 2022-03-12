import React from 'react'
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
} from './styles'
import Image from 'next/image'

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItemsCollection>
        {/* left */}
        <ImgContainerHeader>
          <Image
            src="https://engineering-hub.vercel.app/engineering-hub.png"
            layout="fill"
            objectFit="contain"
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
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-12 cursor-pointer md:hidden" />

          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn" />
            <MessageNotifier>3</MessageNotifier>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://avatars.githubusercontent.com/u/65385487?v=4"
            alt="icon on engineering hub"
            className="h-10 cursor-pointer rounded-full"
          />
        </IconsContainer>
      </HeaderItemsCollection>
    </HeaderContainer>
  )
}

export default Header
