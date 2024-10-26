import Header from "../componet/Navbar/Header/Header";
import { Navbar } from "../componet/Navbar/Navbar";
import TaskBoard from "../componet/TaskBoard/TaskBoard";

const Page = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TaskBoard />
      </main>
    </div>
  );
};

export default Page;
