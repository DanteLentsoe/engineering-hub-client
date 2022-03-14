import React from 'react'
import SharedFeed from '../sharedFeed'
import { FeedContianer } from './styles'
import Posts from '../posts'
import ProfileGlobal from '../profileGlobal'
const Feed = () => {
  return (
    <FeedContianer>
      <section className="col-span-2">
        <SharedFeed />
        <Posts />
      </section>
      <section>
        {/* Mini Profile */}
        <ProfileGlobal />
        {/* Suggestions */}
      </section>
    </FeedContianer>
  )
}

export default Feed
