import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import EngineeringFeed from '../engineeringFeed'

interface IInfomationFeedType {
  id: number
  name: string
  username: string
  avatar: string
  email: string
  dob: Date
  phone: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  website: string
  company: any
}

const SharedFeed = () => {
  const [feedInfo, setFeedInfo] = useState<[] | Array<object>>([])
  useEffect(() => {
    //load set data

    const feedInfoFaker = [...Array(10)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))

    console.log(feedInfoFaker)

    setFeedInfo(feedInfoFaker)
  }, [])

  return (
    <div>
      {feedInfo.map((userProfile: any) => (
        <EngineeringFeed
          key={userProfile.id}
          img={userProfile.avatar}
          username={userProfile.username}
        />
      ))}
    </div>
  )
}

export default SharedFeed
