import { useContext } from "react";
import { AuthContext } from "./auth";

export function useAuth() {
    const context = useContext(AuthContext);
    return context
}