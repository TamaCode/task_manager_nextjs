import { createContext } from "react";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  let test = "hello world"

  return(
    <TaskContext.Provider value={{test}}>
      {children}
    </TaskContext.Provider>
  );
}