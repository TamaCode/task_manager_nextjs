import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([{}, {}, {}]);

  return(
    <TaskContext.Provider value={{tasks}}>
      {children}
    </TaskContext.Provider>
  );
}