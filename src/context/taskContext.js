import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([{}, {}, {}]);

  const createTask = ({ title, description }) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
