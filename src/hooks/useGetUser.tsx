"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useGetUser = () => {
    const {status,...sessionData} = useSession();
    console.log(sessionData)
      
      const email = sessionData.data?.user?.email

    const {data,refetch,isLoading} = useQuery({
        queryKey:['user'],
        queryFn:async() => {
            const fetchedData = await fetch(`/api/user/${email}`,{
               next:{
                revalidate:5
               }
            })
            const response = await fetchedData.json();
            return response;
        }
    })
  
    return { data,refetch, status,isLoading };
}
