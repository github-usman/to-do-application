import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../components/Task";
import { addTodDo, deleteAllTask } from "../redux/actions/toDoAction";


const TodoListPage = () => {
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

    const handleDeleteAll = () => {
        dispatchInput(deleteAllTask());
    }

    // fetch data from redux store
    const list = useSelector((state) => state.todoReducers.initialData);
    return (
        <div className="container bg-secondary border my-2 rounded py-2">
            <h1 className="text-center text-white pb-1 ">To Do App</h1>
            <hr />
            
            {/* get inputs */}
            <form className="w-100 mb-4" onSubmit={addHandler}>
                <div className="d-flex justify-content-center">
                    <input
                        type="text"
                        className="w-50 py-2 rounded "
                        id="inputData"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-primary px-5 py-2">
                        Add
                    </button>
                </div>


            </form>

            {/* list of all task or items */}
            {list.map((ele) => {
                return <div className="my-1" key={ele.id} element>

                    <Task element={ele} />
                </div>
            })}


            {/* button for delete all task */}
            <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-danger px-5 py-2" onClick={handleDeleteAll}>
                    Delete All Task
                </button>
            </div>
        </div>
    );
};

export default TodoListPage;
