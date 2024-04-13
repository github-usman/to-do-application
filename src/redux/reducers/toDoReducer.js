// import dummyTask from "../../assets/dummyData"; 


// initial data for the state
const initData = {
    // initialData: localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : dummyTask 
    initialData: localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
};

const todoReducers = (state = initData, action) => {
    switch (action.type) {
        // Reducer to handle add new task
        case "ADD_TODO":
            const { id, data, isCompleted } = action.payload || {};
            const addedData = [
                {
                    id: id,
                    data: data,
                    isCompleted: isCompleted
                },
                ...state.initialData
            ];
            localStorage.setItem("todoList", JSON.stringify(addedData)); // Save to localStorage
            return {
                ...state,
                initialData: addedData
            }

        // Reducer to handle toggling completed 
        case "TOGGLE_COMPLETED":
            const toggleId = action.payload && action.payload.id;
            const toggledData = state.initialData.map(item =>
                item.id === toggleId ? { ...item, isCompleted: !item.isCompleted } : item
            );
            localStorage.setItem("todoList", JSON.stringify(toggledData)); // Save changes to localStorage
            return {
                ...state,
                initialData: toggledData
            }

        // Reducer to handle delete 
        case "DELETE_TODO":
            const deleteId = action.payload && action.payload.id;
            const newData = state.initialData.filter(ele => ele.id !== deleteId);
            localStorage.setItem("todoList", JSON.stringify(newData)); // update to localStorgae
            return {
                ...state,
                initialData: newData
            }

        // Reducer to handle delete all
        case "DELETE_ALL_TASK":
            localStorage.removeItem("todoList"); // Clear localStorage
            return {
                initialData: [],
            }

        default:
            return state;
    }
}

export default todoReducers;
