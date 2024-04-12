import { nanoid } from 'nanoid'  // unique key deprication for data and time method


// action for new task in list
export const addTodDo = (data) => {
    return {
        type: "ADD_TODO",
        payload:{
            id:nanoid,
            data:data
        }
    }
}

// action for completed task in list
export const completedTodDo = () => {
    return {
        type: "COMPLETED_TODO"
    }
}

// action to remove task in list
export const removeTodDo = () => {
    return {
        type: "REMOVE_TODO"
    }
}

// action for delete a task in list
export const deleteTodDo = () => {
    return {
        type: "DELETE_TODO"
    }
}