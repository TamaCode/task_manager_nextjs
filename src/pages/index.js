import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

const Home = () => {
  const {test} = useContext(TaskContext)
  console.log(test)
  return (
    <div className="m-10">
      Hello World
    </div>
  );
}
 
export default Home;