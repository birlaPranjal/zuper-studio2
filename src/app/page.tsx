import React from 'react'
import WhoWeAre from '@/components/WhoWeAre'
import Header from '@/components/Header'

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center max-w-[99vw]">
      <section className="min-h-scree n flex items-center justify-center">
        <Header />
      </section>
      <section className="min-h-scree n flex items-center justify-center">
        <WhoWeAre />
      </section>
    </main>
  )
}
