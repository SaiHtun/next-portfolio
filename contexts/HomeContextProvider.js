import { createContext, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [btnResume, setBtnResume] = useState(false);

  const handleCloseResumeBtn = (e) => {
    if (!e.className.includes("btnResume")) setBtnResume(false);
  };

  return (
    <HomeContext.Provider
      value={{ btnResume, setBtnResume, handleCloseResumeBtn }}
    >
      {children}
    </HomeContext.Provider>
  );
}
