/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const MAX_LENGTH = 25;

const CommandHistoryContext = createContext({});

export const CommandHistoryProvider = ({ children }) => {
  const [command, setCommand] = useState("");
  const [commands, setCommands] = useState([]);

  const addCommand = (command) => {
    setCommands((prev) => {
      const newCommands = [command, ...prev];
      if (newCommands.length > MAX_LENGTH) {
        newCommands.pop();
      }
      return newCommands;
    });
  };

  const removeCommand = (e, index) => {
    e.stopPropagation();
    setCommands((prev) => {
      const newCommands = [...prev];
      newCommands.splice(index, 1);
      return newCommands;
    });
  };

  const removeAllCommands = () => {
    setCommands([]);
  };

  const contextValue = {
    command,
    setCommand,
    commands,
    addCommand,
    removeCommand,
    removeAllCommands,
  };

  return (
    <CommandHistoryContext.Provider value={contextValue}>
      {children}
    </CommandHistoryContext.Provider>
  );
};

export const useCommandHistory = () => useContext(CommandHistoryContext);
