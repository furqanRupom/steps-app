import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GithubProviders from "next-auth/providers/github";
import GoogleProviders from "next-auth/providers/google";
import bcrypt from "bcrypt"
import { User, UserRole } from "@prisma/client";



export const options :NextAuthOptions = {
    providers:[
        GithubProviders({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProviders({
            name:"Credentials",
            credentials:{
               
            },
            async authorize(credentials, req):Promise<User | null> {
                const { email, password } = credentials as {
                    email:string,
                    password:string
                };
                try {
                  
                    const user = await prisma.user.findUnique({
                      where:{
                        email
                      },
                      include:{
                        member:true
                      }
                    });

                    if(!user){
                        return null
                    }

                    const matchedPassword = await bcrypt.compare(password,user.password);
                    if(!matchedPassword){
                        throw  new Error("Password did not matched !");
                    }
                  
                    return user;
                    
                } catch (error) {
                    return null;
                }
            },


        }),
    
    ],
    callbacks:{
        async session({token,session}){
            if(token){
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.role = token.role;
                session.user.image = token.picture
            }

         
            return session;
        },
        async jwt({token,user}){
            const dbUser = await prisma.user.findUnique({
                where:{
                    email:token.email as string
                },
                include:{
                    profile:true
                }
            });

            if(!dbUser){
               throw new Error("user not found");
            }

            return {
                id:dbUser.id,
                name:dbUser?.profile?.name,
                email:dbUser.email,
                picture:dbUser.profile?.profilePhoto,
                role:dbUser.role
            }
        }
    },
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/login",
        signOut:"/login"
    },
    secret:process.env.NEXTAUTH_SECRET as string,
  
}