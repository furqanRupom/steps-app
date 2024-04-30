"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useGetUser = () => {
    // const { status, ...sessionData } = useSession();
    // console.log(sessionData);

    // const email = sessionData.data?.user?.email || ""; // Default to empty string if email is undefined

    const { data,status, refetch, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            // if (!email) return null; // If email is undefined or empty, return null
            const fetchedData = await fetch(`/api/user/${localStorage.getItem("email")}`, {
                next: {
                    revalidate: 5
                }
            });
            const response = await fetchedData.json();
            return response;
        }
    });

    return { data, refetch, status, isLoading };
};
