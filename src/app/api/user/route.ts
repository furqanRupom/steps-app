import { NextRequest } from "next/server";

export const GET = async (req:NextRequest) => {
    const data = req.json();
    console.log(data);
    return data;
}