import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export const POST = async (req: NextRequest) => {
    const {password,...userData} = await req.json();
    console.log(userData);

   const exitUser = await prisma.user.findUnique({
        where: {
            email:userData.email
        }
    });

    if(exitUser){
        return NextResponse.json({success:false,message:"user already exit"})
    }

    const result = await prisma.$transaction(async (tx) => {
        // hashed password 
        const hashedPassword = await bcrypt.hash(password, 12);
        const user =  await prisma.user.create({
            data: {
                email:userData.email,
                password: hashedPassword
            }
        });
       


       const member =   await prisma.member.create({
            data:userData
        });

        await prisma.profile.create({
            data: {
                userId: user.id,
                name: member.name,
                email: user.email,
                profilePhoto: member.profilePhoto
            }
        })

        return user;

    })

    return NextResponse.json({
        success: true,
        message: "User created successfully!",
        data: result
    })
}