import { createContext, useContext } from "react";

//create user context
export const UserContext = createContext();

//create custom hook which will return the values  from user context
//this way we don't have to import the useContext and user context but just the hook
export function useUser() {
    return useContext(UserContext);
}
