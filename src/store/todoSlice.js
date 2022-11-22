import { createAction, createSlice } from "@reduxjs/toolkit";




const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        handeleAddTodo( state, action) {
            if(action.payload.text !== ""){
                state.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text, 
                    completed: false,
                })

            }
        },
        hendeleRemoveTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
        hendeleCheckbox(state, action) {
            const toggledTodo = state.todos.find(item => item.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },

    }
})


export const {handeleAddTodo, hendeleRemoveTodo, hendeleCheckbox} = todoSlice.actions;
export default todoSlice.reducer

