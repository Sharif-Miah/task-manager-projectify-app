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
  const [updateTask, setUpdateTask] = useState(null);

  // Add TO TASK ABD UPDATA TASK

  const handleOnTask = (newTask, isAdd) => {
    event.preventDefault();

    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      });
    }

    setIsOpenModal(false);
  };

  // DELETE A TASK

  const handleDeleteTask = (taskId) => {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  };

  // EDIT A TASK

  const hanlseEditTask = (task) => {
    setUpdateTask(task);
    console.log(task);
    setIsOpenModal(true);
  };

  // OPEN MODAL

  const handleOpenModal = () => {
    setIsOpenModal(true);
    setUpdateTask(null);
  };

  const handleColseModal = () => {
    setIsOpenModal(false);
    setUpdateTask(null);
  };

  return (
    <div>
      {isOpenModal && (
        <AddTaskModal
          onCreateTask={handleOnTask}
          onCencelModal={handleColseModal}
          updateTask={updateTask}
        />
      )}
      <div className="mx-auto max-w-7xl p-6">
        <TaskAddButton onModal={handleOpenModal} />

        <div className="-mx-2 mb-6 flex flex-wrap">
          <TodoList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={hanlseEditTask}
          />
          <OnProgressList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={hanlseEditTask}
          />
          <DoneList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={hanlseEditTask}
          />
          <ReviseList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={hanlseEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
