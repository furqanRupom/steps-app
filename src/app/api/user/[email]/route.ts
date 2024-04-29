import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
type Params = {
    email: string
}


export const GET = async (req: NextRequest,context:{params:Params}) => {
    const email = context.params.email;
    console.log(email);
    try {
        const findUser = await prisma.user.findUniqueOrThrow({
            where:{
                email
            },
            include:{
                member:true
            }
        });

        const responseData = {
            name:findUser.member?.name,
            email:findUser.email,
            image:findUser.member?.profilePhoto
        };
       


        return NextResponse.json({success:true,message:"user data feteched successfully !",data:responseData})
    } catch (error) {

        return NextResponse.json({success:false,message:"failed to fetched user data",data:error})
        
    }
   
}