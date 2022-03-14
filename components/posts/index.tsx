import React from 'react'
import SignlePost from '../post'

interface IPost {
  id: string
  username: string
  userImg: string
  img: string
  caption?: string
}
const MockData = [
  {
    id: '1',
    username: 'Dante-dev',
    userImg: 'https://avatars.githubusercontent.com/u/65385487?v=4',
    img: 'https://miro.medium.com/max/1400/1*qzSi1lZx-4Y733QbDw-h1w.png',
    caption: 'Test Caption',
  },
  {
    id: '2',
    username: 'Dante-dddee',
    userImg: 'https://avatars.githubusercontent.com/u/65385487?v=4',
    img: 'https://miro.medium.com/max/1400/1*qzSi1lZx-4Y733QbDw-h1w.png',
    caption: 'Test Caption',
  },
]
const Posts = () => {
  return (
    <div>
      {MockData.map((post: IPost) => (
        <SignlePost
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.img}
          caption={post.caption}
          userImg={post.userImg}
        />
      ))}
    </div>
  )
}

export default Posts
