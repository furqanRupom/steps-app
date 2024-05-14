import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
type Params = {
    email: string
}


export const GET = async (req: NextRequest,context:{params:Params}) => {
    const email = context.params.email;
    try {
        const findUser = await prisma.member.findUniqueOrThrow({
            where:{
                email
            }
        });

     
       


        return NextResponse.json({success:true,message:"user data feteched successfully !",data:findUser})
    } catch (error) {

        return NextResponse.json({success:false,message:"failed to fetched user data",data:error})
        
    }
   
}