import styles from "./task.module.css";
import React from 'react';
import { useDispatch } from 'react-redux';
import { completedTodDo, deleteTodDo } from '../redux/actions/toDoAction';
import { MdDelete } from "react-icons/md";


const Task = ({ element }) => {
    const dispatch = useDispatch();

    //  complete and undo function
    const toggleCompleted = () => {
        dispatch(completedTodDo(element.id));
    }
    // delete task 
    const deleteTask = () => {
        dispatch(deleteTodDo(element.id));
    }

    return (
        <div className={`d-flex gap-5  ${element.isCompleted ? 'bg-success border' : 'bg-dark'} justify-content-between rounded p-2 align-items-center`}>

            <p className={`${element.isCompleted ? 'text-decoration-line-through text-dark' : 'text-white'}`} >{element.data}</p>
            <div>
                <button className={`btn `} onClick={deleteTask}><MdDelete size={35} color="red" /></button>
                <button className={`${element.isCompleted ? styles.toggleBtnComplete : styles.toggleBtnIncomplete} ${element.isCompleted ? styles.completedToggle : styles.incompleteToggle}`} onClick={toggleCompleted}>
                    <div className={styles.toggleSlider}></div><p>{element.isCompleted ? 'Completed' : 'Pending'}</p>
                </button>
            </div>
        </div >
    );
};

export default Task;
