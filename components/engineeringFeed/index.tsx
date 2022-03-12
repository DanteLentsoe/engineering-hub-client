import React from 'react'

interface IEngineerringFeed {
  img: string
  username: string
}
const EngineeringFeed = ({ img, username }: IEngineerringFeed) => {
  return (
    <div>
      <img src={img} alt="User Engineering Hub profile" />
      <p>{username}</p>
    </div>
  )
}

export default EngineeringFeed
