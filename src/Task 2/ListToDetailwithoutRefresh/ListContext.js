import { createContext } from "react";

export const profileContext = createContext(null); //in usecontext hook to extract  the val

export const ProfileProvider = profileContext.Provider; // pass  thr val wrapper