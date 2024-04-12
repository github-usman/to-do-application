import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../components/Task';
import { addTodDo } from '../redux/actions/toDoAction';

const TodoListPage = () => {
    // hook for input taks by user
    const [input, setInput] = useState('')

    // dispatch the text to redux state management
    const dispatchInput = useDispatch();
    const addHandler = (e) => {
        e.preventDefault();
        dispatchInput(addTodDo(input));
        setInput('');
        // console.log(list);
    }


    // fetch data from redux store
    const list = useSelector((state) => state.todoReducers.initialData);
    return (
        <div className='container pt-5'>
            <form className="row g-3" onSubmit={addHandler}>
                <div className="col-auto">
                    <label htmlFor="inputData" className="">Email</label>
                    <input type="text" className="input" id="inputData" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
            </form>
            {
                list.map((element, index) => {
                    return (
                        <Task key={index} element={element} />
                    )
                })
            }
        </div>
    )
}

export default TodoListPage