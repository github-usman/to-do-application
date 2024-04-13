// initial data for the state
const initData = {
    initialData: []
}

const todoReducers = (state = initData, action) => {
    switch (action.type) {
        // Reducer to handle add new task
        case "ADD_TODO":
            const { id, data, isCompleted } = action.payload || {};
            return {
                ...state,
                initialData: [
                    {
                        id: id,
                        data: data,
                        isCompleted: isCompleted
                    },
                    ...state.initialData
                ]
            }

        // Reducer to handle toggling completed 
        case "TOGGLE_COMPLETED":
            const toggleId = action.payload && action.payload.id;
            return {
                ...state,
                initialData: state.initialData.map(item =>
                    item.id === toggleId ? { ...item, isCompleted: !item.isCompleted } : item
                )
            }


        // Reducer to handle  delete 
        case "DELETE_TODO":
            const deleteId = action.payload && action.payload.id;
            const newList = state.initialData.filter(ele => ele.id !== deleteId);
            return {
                ...state,
                initialData: newList
            }


        // Reducer to handle delete all
            case "DELETE_ALL_TASK":
                return {
                    initialData: [],
                }


        default: return initData;
    }
}





export default todoReducers;