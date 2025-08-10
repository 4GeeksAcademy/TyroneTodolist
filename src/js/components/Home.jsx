import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <h1>todos</h1>
      <div className="container">
        <ul>
          <li>
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setTaskList(taskList.concat(inputValue));
                  setInputValue("");
                }
              }}
              placeholder="What are your goals today?"
            />
          </li>

          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <i
                class="fa-solid fa-square-check"
                onClick={() =>
                  setTaskList(taskList.filter((_, i) => i !== index))
                }
              ></i>
            </li>
          ))}
        </ul>
        <div class="count">{taskList.length}</div>
      </div>
    </>
  );
};

export default Home;
