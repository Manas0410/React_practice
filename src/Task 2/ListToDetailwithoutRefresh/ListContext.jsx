import { Children, createContext, useState } from "react";

export const ProfileContext = createContext({
  products: {},
  setProducts: () => {},
});
//in usecontext hook to extract  the val

// const ProfileContext = ({ children }) => {
//   return (
//     <ProfileContext.Provider value={}>
//       {children}
//     </ProfileContext.Provider>
//   );
// };
export default ProfileContext; // pass  thr val wrapper
