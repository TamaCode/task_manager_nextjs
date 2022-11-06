import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { tasks } = useContext(TaskContext);
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex items-center  bg-gray-800 flex px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg">Task App</h1>
        </Link>

        <span className="ml-2 text-gray-400 font-bold">{`( ${tasks.length} Tasks )`}</span>

        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>

      <main className="px-28">{children}</main>
    </div>
  );
};

export default Layout;
