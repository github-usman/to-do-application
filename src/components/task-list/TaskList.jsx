import styles from "./taskList.module.css";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodDo, deleteTodDo } from '../../redux/actions/toDoAction';


const TaskList = ({ element }) => {
    const dispatch = useDispatch();

    // fetch all list data from redux store
    const list = useSelector((state) => state.todoReducers.initialData);
    console.log(list);

    //  complete and undo function (toggle)
    const toggleCompleted = (id) => {
        dispatch(completedTodDo(id));
    }
    // delete task 
    const deleteTask = (id) => {
        dispatch(deleteTodDo(id));
    }



    return (
        <>
            {list.map((ele) => {
                return (<div className="my-1" key={ele.id}>
                    <div className={`d-flex gap-5 ${ele.isCompleted ? 'bg-success border' : 'bg-dark'} justify-content-between rounded p-2 align-items-center`}>
                        <p className={`${ele.isCompleted ? 'text-decoration-line-through text-dark' : 'text-white'}`}>{ele.data}</p>
                        <div >
                            <button className="btn btn-danger m-2" onClick={() => deleteTask(ele.id)}>Delete Task</button>
                            <button className={`m-2 ${ele.isCompleted ? styles.toggleBtnComplete : styles.toggleBtnIncomplete} ${ele.isCompleted ? styles.completedToggle : styles.incompleteToggle}`} onClick={() => toggleCompleted(ele.id)}>
                                <div className={styles.toggleSlider}></div><p>{ele.isCompleted ? 'Completed' : 'Pending'}</p>
                            </button>
                        </div>
                    </div>
                </div>)
            })}
        </>
    );

};

export default TaskList;
