import { UserButton } from '@clerk/nextjs';
import React from 'react'



type ConversationPageProps ={
    params : Promise<{id : string}>
}
const page = async({params} : ConversationPageProps) => {
    const {id} = await params 
    
  return (
    <div>
      {id}
      <UserButton/>
    </div>
  )
}

export default page
