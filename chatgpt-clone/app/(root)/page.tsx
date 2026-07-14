import { ModeToggle } from '@/components/ui/mode-toggle';
import { UserButton } from '@clerk/nextjs';
import React from 'react'


const page = () => {
  return (
    <div>
      <UserButton/>
      <ModeToggle/>
    </div>
  )
}

export default page
