import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../contex/ContexProvider";



// Step3: UseGlobals => qoshgan malumotni contex ichidagi olib beradi
export const useGlobals = () => {
    const context = useContext(GlobalContext); // osha malumotni olib beradi
    if (context === undefined) throw new Error("useGlobals withit Provider");
    return context;
};