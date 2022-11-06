import { TaskContext } from "../context/taskContext";
import { useContext } from "react";
import Layout from "../components/Layout";

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <Layout>
      <div>
        {tasks.length === 0 ? (
          <h2>There are no Tasks</h2>
        ) : (
          <div className="w-7/12">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
              >
                <span>{index}</span>
                <div>
                  <h1 className="font-bold">{task.title}</h1>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
