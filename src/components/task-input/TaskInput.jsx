import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodDo } from "../../redux/actions/toDoAction";

const TaskInput = () => {
  // hook for input taks by user
  const [input, setInput] = useState("");

  // dispatch the text to redux state management
  const dispatchInput = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    // before sending check empty input value,
    if (input.trim().length > 0) {
      dispatchInput(addTodDo(input));
      setInput("");
    }
  };
  return (
    <div>
      <form className="w-100 mb-4" onSubmit={addHandler}>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="w-50 py-2 rounded "
            id="inputData"
            placeholder="Please Enter your Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary px-5 py-2">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
