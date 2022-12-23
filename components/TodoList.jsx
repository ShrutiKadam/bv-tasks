import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todo", todos);

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "" && inputValue.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: {
          index: todos.length,
          text: inputValue,
          completed: false,
          deleted: false,
        },
      });
      setInputValue("");
    }
  };
  return (
    <div
      className="card text-dark bg-light mb-3 p-1"
      style={{ maxWidth: "18rem", zIndex: 1 }}
    >
      <div className="card-header">Todo List</div>
      <div className="card-body">
        <ul class="list-group mb-2">
          {todos?.map((value, index) => (
            <li key={index} class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value={value.completed}
                aria-label="..."
                checked={value.completed ? true : false}
                onChange={() =>
                  dispatch({
                    type: "TOGGLE_TODO",
                    payload: { ...value },
                  })
                }
              />
              <span className="text-capitalize">{value.text}</span>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_TODO",
                    payload: { ...value },
                  })
                }
              ></button>
            </li>
          ))}
        </ul>
        <form
          class="d-flex justify-content-center align-items-center mb-4"
          onSubmit={handleSubmit}
        >
          <div class="form-outline flex-fill">
            <input
              type="text"
              id="form2"
              class="form-control border-0 full-width"
              placeholder="new task"
              value={inputValue}
              onChange={handleInput}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default TodoList;
