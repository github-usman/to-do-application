// initial data for the state
const initData = {
    initialData : []
}

const todoReducers = (state = initData,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {id,data} = action.payload;
            return{
                ...state,
                data:[...state.initialData,{
                    id:id,
                    data:data
                }]
            }
    }
}



export default todoReducers;