import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = ({ title, description }) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
