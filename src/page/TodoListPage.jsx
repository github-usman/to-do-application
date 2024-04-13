import React from "react";
import { useDispatch } from "react-redux";
import TaskInput from "../components/task-input/TaskInput";
import { deleteAllTask } from "../redux/actions/toDoAction";
import TaskList from "../components/task-list/TaskList";


const TodoListPage = () => {
    // dispatch the text to redux state management
    const dispatchInput = useDispatch();

    const handleDeleteAll = () => {
        dispatchInput(deleteAllTask());
    }

    return (
        <div className="container bg-secondary border my-2 rounded py-2">
            
            <h2 className="text-center text-white pb-1 ">To Do App</h2>
            <hr />


            <TaskInput />
            <TaskList />


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
