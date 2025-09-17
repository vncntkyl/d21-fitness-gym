/* eslint-disable react-refresh/only-export-components */
import { revalidate } from "@/api/auth";
import type { AuthProvider } from "@/types/Auth";
import type { User } from "@/types/User";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const AuthProviderContext = createContext<AuthProvider | null>(null);

export const useAuth = (): AuthProvider => {
    const context = useContext(AuthProviderContext);

    if (context === undefined || context === null) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        console.count("render");
        const setup = async () => {
            const data = await revalidate();
            if (data) {
                setUser(data);
            }
        }
        setup();
    }, [])

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    const value = { user, setUser, logout };

    return <AuthProviderContext.Provider value={value}>
        {children}
    </AuthProviderContext.Provider>
}