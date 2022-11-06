import Layout from "../components/Layout";
import { useState } from "react";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const TaskFormPage = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const { createTask } = useContext(TaskContext);
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    router.push("/");
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Add a Task</h1>
        <input
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          type="text"
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          rows="2"
          name="description"
          placeholder="Write a description"
          onChange={handleChange}
        ></textarea>
        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md disabled:opacity-30"
          disabled={!task.title || !task.description}
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
