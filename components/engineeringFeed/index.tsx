import React from 'react'
import { ImageProfiles, ImgText } from './styles'
interface IEngineerringFeed {
  img: string
  username: string
}
const EngineeringFeed = ({ img, username }: IEngineerringFeed) => {
  return (
    <div>
      <ImageProfiles src={img} alt="User Engineering Hub profile" />
      <ImgText> {username}</ImgText>
    </div>
  )
}

export default EngineeringFeed
