import React, { createContext, useState, useContext } from "react";

// Data structure for toggle
interface IToggleState {
  light: boolean;
  handleToggleLight: () => void;
}

// Context for toggle
const ToggleHeaderContext = createContext<IToggleState>({
  light: false,
  handleToggleLight: () => {},
});

export const ToggleHeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [light, setLight] = useState<boolean>(false);

  // Toggles light
  const handleToggleLight = () => {
    setLight((state) => !state);
  };

  // Syntax sugar for context provider
  return (
    <ToggleHeaderContext.Provider value={{ light, handleToggleLight }}>
      {children}
    </ToggleHeaderContext.Provider>
  );
};

// Create a hook for easy usage of the context
export const useToggleHeader = () => useContext(ToggleHeaderContext);
