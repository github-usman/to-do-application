import { nanoid } from 'nanoid'  // unique key deprication for data and time method


// action for new task in list
export const addTodDo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: nanoid(),
            data: data,
            isCompleted: false
        }
    }
}

// Action for toggling completed status
export const completedTodDo = (id) => {
    return {
        type: "TOGGLE_COMPLETED",
        payload: {
            id:id
        }
    }
}



// action for delete a task in list
export const deleteTodDo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: {
            id:id
        }
    }
}

// action to delete all in list
export const deleteAllTask = () => {
    return {
        type: "DELETE_ALL_TASK",
    }
}