import { createContext, useContext} from "react"


export const AuthContext = createContext();

// custom hook
export function useAuth(){

    // already existing hook
   return useContext(AuthContext)
}