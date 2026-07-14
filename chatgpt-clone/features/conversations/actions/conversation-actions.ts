import { prisma } from "@/utils/db";

import { NextRequest } from "next/server";


//crud-opeartions 

export async function  createConversation(req : NextRequest ) {
    await auth.protect()
    //get userId if user if not then return the user 
    //if userId valid then take  titl efrom body and crearte a converstaion on db  
   const {title ,    systemPrompt , model } = await req.json()
    const converstaion = await prisma.conversation.create({
        data : {
            userId : 
        }
    })
}

export async function  getConversation(params:type) {
    
}

export async function  updateConversation(params:type) {
    
}

export async function  deleteConversation(params:type) {
    
}