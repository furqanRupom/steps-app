import { withAuth } from "next-auth/middleware"
import prisma from "./prisma/client";

export { default } from "next-auth/middleware"


// export default withAuth( async function middleware(req){
//    console.log({pathname : req.nextUrl.pathname});
//    console.log({email:req.nextauth.token?.email});
//     const email = req.nextauth.token?.email;

//    const userRole = await prisma.user.findUniqueOrThrow({
//     where:{
//         email:email as string
//     }
//    });

//    const role = userRole.role;


// })

export const config = { matcher: ["/about"] }