import { createContext } from "react";

export const profileContext = createContext(null); //in usecontext hook to extract  the val

export const ProfileProvider = profileContext.Provider; // pass  thr val wrapper



//wrap the component's return part with profileprovider jisse databhejna
//inprovider value = {object}

//get that data by usecontext(contextname) 