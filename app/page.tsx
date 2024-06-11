import React from 'react'
import { Button } from '@/components/ui/button'
import LeftSidebar from '@/components/LeftSidebar'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <LeftSidebar />
         <h1 className='text-20 font-bold text-white-1'>Trending Podcast</h1>
         <Button className="text-white-1" >Button</Button>
      </section>
      
    </div>
  )
}

export default Home
