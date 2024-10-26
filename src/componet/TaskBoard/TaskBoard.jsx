import { useState } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import DoneList from "./DoneList/DoneList";
import OnProgressList from "./OnProgressList/OnProgressList";
import ReviseList from "./ReviseList/ReviseList";
import TaskAddButton from "./TaskAddButton/TaskAddButton";
import TodoList from "./TodoList/TodoList";

const TaskBoard = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  };

  const initialTask = [
    {
      id: crypto.randomUUID(),
      taskName: "Content Writer",
      description: "Prepare proctor for client meeting",
      date: getCurrentDate(),
      type: "todo",
    },

    {
      id: crypto.randomUUID(),
      taskName: "Content Writer",
      description: "Prepare proctor for client meeting",
      date: getCurrentDate(),
      type: "inprogress",
    },

    {
      id: crypto.randomUUID(),
      taskName: "Content Writer",
      description: "Prepare proctor for client meeting",
      date: getCurrentDate(),
      type: "done",
    },

    {
      id: crypto.randomUUID(),
      taskName: "Content Writer",
      description: "Prepare proctor for client meeting",
      date: getCurrentDate(),
      type: "revise",
    },
  ];

  const [tasks, setTasks] = useState(initialTask);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleOnTask = (newTask) => {
    event.preventDefault();

    console.log(newTask);

    setTasks([...tasks, newTask]);
    setIsOpenModal(false);
  };

  return (
    <div>
      {isOpenModal && (
        <AddTaskModal
          onCreateTask={handleOnTask}
          onCencelModal={() => setIsOpenModal(false)}
        />
      )}
      <div className="mx-auto max-w-7xl p-6">
        <TaskAddButton onModal={handleOpenModal} />

        <div className="-mx-2 mb-6 flex flex-wrap">
          <TodoList tasks={tasks} />
          <OnProgressList tasks={tasks} />
          <DoneList tasks={tasks} />
          <ReviseList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
