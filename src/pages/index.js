import { TaskContext } from "../context/taskContext";
import { useContext } from "react";
import Layout from "../components/Layout";

const Home = () => {
  const {} = useContext(TaskContext);
  return (
    <Layout>
      <div className="m-10">Hello World</div>
    </Layout>
  );
};

export default Home;
