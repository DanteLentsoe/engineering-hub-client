import React from 'react'
import SharedFeed from '../sharedFeed'
const Feed = () => {
  return (
    <main className="md:grid-clos-2 mx-auto grid grid-cols-2 md:max-w-3xl xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <SharedFeed />
      </section>
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  )
}

export default Feed
