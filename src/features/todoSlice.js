import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    table: [
      
    ]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                address: action.payload.address
            }
            state.table.push(todo)
        },
        removeTodo: (state, action) => {
            state.table = state.table.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            
            const { id , firstName , lastName ,email , address } = action.payload;
            const updateTable = state.table.find(todo => todo.id === id);
            if (updateTable) {
                updateTable.firstName = firstName;
                updateTable.lastName = lastName;
                updateTable.email = email;
                updateTable.address = address;
            }
          },
    }
})

export const { addTodo, removeTodo ,updateTodo } = todoSlice.actions

export default todoSlice.reducer