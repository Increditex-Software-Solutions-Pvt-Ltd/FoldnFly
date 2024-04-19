import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const useModeContext = () => {
  return useContext(ModeContext);
};

export { ModeProvider, useModeContext };
