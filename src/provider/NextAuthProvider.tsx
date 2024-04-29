"use client";

import {
    QueryClient,
    QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const NextAuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const quaryClient = new QueryClient();
    return <QueryClientProvider client={quaryClient}>
        <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
}