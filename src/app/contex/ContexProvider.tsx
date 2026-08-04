import React, { createContext, ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";


interface GlobalInterface {
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
}

// Step1: Global contex => hosil qildik createContext orqali
export const GlobalContext = createContext<GlobalInterface | undefined>(
    undefined
);

// bu yerdan malumotlarni hosil qilamiz
const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cookies = new Cookies();
    if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

    // auth member malumotni shakillantiramiz
    const [authMember, setAuthMember] = useState<Member | null>(
        localStorage.getItem("memberData")
            ? JSON.parse(localStorage.getItem("memberData") as string)
            : null
    );
    console.log("=== verify ===");

    // Step2: va shu contexga malumot joylashtirdik uni parent qildik
    return (
        <GlobalContext.Provider value={{ authMember, setAuthMember }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;