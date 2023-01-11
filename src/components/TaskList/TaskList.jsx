import "./TaskList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Add from "components/Add/Add";
import Task from "components/Task/Task";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue === "") {
      return;
    }
    let newTaskList = [
      ...taskList,
      {
        id: uuidv4(),
        title: inputValue,
        completed: false,
      },
    ];
    setTaskList(newTaskList);
    setInputValue("");
  };

  const handleCompletedChange = (taskId) => {
    const newTasks = taskList.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTaskList(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(newTasks);
  };

  return (
    <>
      <Add
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleAddButtonClick={handleAddButtonClick}
      />
      <div id="tasksList">
        {taskList.map((task) => {
          return (
            <Task
              title={task.title}
              completed={task.completed}
              key={task.id}
              identity={task.id}
              handleCompletedChange={handleCompletedChange}
              handleTaskDeletion={handleTaskDeletion}
            />
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
