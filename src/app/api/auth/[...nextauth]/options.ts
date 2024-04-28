import { NextAuthOptions } from "next-auth";
import GithubProviders from "next-auth/providers/github";
import GoogleProviders from "next-auth/providers/google";

export const options :NextAuthOptions = {
    providers:[
        GithubProviders({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        })
        
    ],
    pages:{
        signIn:"/login",
        signOut:"/",
        
    },
    secret:process.env.NEXTAUTH_SECRET as string,
}