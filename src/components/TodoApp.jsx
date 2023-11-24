import { useState } from "react";
import {
  WrapperContainer,
  Wrapper,
  Lists,
  StyledButton,
  StyledInput,
} from "../styles/TodoAppStyled";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (column, index) => {
    if (column === "todo") {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    } else if (column === "inProgress") {
      const updatedInProgressTasks = [...inProgressTasks];
      updatedInProgressTasks.splice(index, 1);
      setInProgressTasks(updatedInProgressTasks);
    } else if (column === "completed") {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  const moveTask = (fromColumn, toColumn, index) => {
    if (fromColumn === "todo" && toColumn === "inProgress") {
      const taskToMove = tasks[index];
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
      setInProgressTasks([...inProgressTasks, taskToMove]);
    } else if (fromColumn === "inProgress" && toColumn === "completed") {
      const taskToMove = inProgressTasks[index];
      const updatedInProgressTasks = [...inProgressTasks];
      updatedInProgressTasks.splice(index, 1);
      setInProgressTasks(updatedInProgressTasks);
      setCompletedTasks([...completedTasks, taskToMove]);
    }
  };

  return (
    <div>
      <div>
        <div style={{ margin: "30px 0" }}>
          <StyledInput
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <StyledButton onClick={addTask}>Add Task</StyledButton>
        </div>
        <WrapperContainer>
          <Wrapper>
            <h2>Work to be done {tasks.length > 0 && ` | ${tasks.length}`}</h2>
            <ul>
              {tasks.map((task, index) => (
                <Lists key={index}>
                  <li>
                    <p>{task}</p>
                    <StyledButton onClick={() => deleteTask("todo", index)}>
                      -
                    </StyledButton>
                    <StyledButton
                      onClick={() => moveTask("todo", "inProgress", index)}
                    >
                      +
                    </StyledButton>
                  </li>
                </Lists>
              ))}
            </ul>
          </Wrapper>
          <Wrapper>
            <div>
              <h2>
                In Progress{" "}
                {inProgressTasks.length > 0 && ` | ${inProgressTasks.length}`}
              </h2>
              <ul>
                {inProgressTasks.map((task, index) => (
                  <Lists key={index}>
                    <li>
                      <p>{task}</p>
                      <StyledButton
                        onClick={() => deleteTask("inProgress", index)}
                      >
                        -
                      </StyledButton>
                      <StyledButton
                        onClick={() =>
                          moveTask("inProgress", "completed", index)
                        }
                      >
                        +
                      </StyledButton>
                    </li>
                  </Lists>
                ))}
              </ul>
            </div>
          </Wrapper>
          <Wrapper>
            <div>
              <h2>
                Completed Works{" "}
                {completedTasks.length > 0 && ` | ${completedTasks.length}`}{" "}
              </h2>
              <ul>
                {completedTasks.map((task, index) => (
                  <Lists key={index}>
                    <li>
                      <p>{task}</p>
                      <StyledButton
                        onClick={() => deleteTask("completed", index)}
                      >
                        -
                      </StyledButton>
                    </li>
                  </Lists>
                ))}
              </ul>
            </div>
          </Wrapper>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default TodoApp;
