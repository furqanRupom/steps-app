import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const feedbacks = await prisma.feedback.findMany();
        return NextResponse.json({ success: true, message: "All the feedback data fetched successfully !", data: feedbacks })

    } catch (error: any) {

        return NextResponse.json({ success: false, message: error.message, data: error })

    }
}