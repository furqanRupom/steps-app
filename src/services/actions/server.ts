"use server";

export const userData = async (email:string) => {
    const response = await fetch(`${process.env.BACKEND_URL}/api/user/${email}`,{
        next:{
            revalidate:15
        }
    });
    const {data} = await response.json();
    return data;
}