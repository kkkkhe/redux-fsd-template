import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
	text: string
}
const initialState: initialStateType = {
	text: 'adsfasdf'
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		changeValue(_, action){
			console.log(action.payload)
		}
	}
})

export const actions = {
...todoSlice.actions
}
