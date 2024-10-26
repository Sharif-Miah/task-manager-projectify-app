import { useState } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import DoneList from "./DoneList/DoneList";
import OnProgressList from "./OnProgressList/OnProgressList";
import ReviseList from "./ReviseList/ReviseList";
import TaskAddButton from "./TaskAddButton/TaskAddButton";
import TodoList from "./TodoList/TodoList";

const TaskBoard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      {isOpenModal && <AddTaskModal />}
      <div className="mx-auto max-w-7xl p-6">
        <TaskAddButton onModal={handleOpenModal} />

        <div className="-mx-2 mb-6 flex flex-wrap">
          <TodoList />
          <OnProgressList />
          <DoneList />
          <ReviseList />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
