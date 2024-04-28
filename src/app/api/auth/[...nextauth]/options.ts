import { NextAuthOptions } from "next-auth";
import GithubProviders from "next-auth/providers/github";

export const options :NextAuthOptions = {
    providers:[
        GithubProviders({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
        
    ],
    pages:{
        signIn:"/",
        signOut:"/login"
    },
    secret:process.env.NEXTAUTH_SECRET as string
}