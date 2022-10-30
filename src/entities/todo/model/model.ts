import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createBaseSelector } from "../../../shared/lib/redux-std";

const initialState = {
	isLoading: false
}
type State = typeof initialState
const reducerPath = 'entities/todo'
export const todoSlice = createSlice({
	name: reducerPath,
	initialState,
	reducers: {
		changeValue(state, action: PayloadAction<boolean>){
			console.log(action.payload)
			state.isLoading = action.payload
		}
	}
})

const getList = createAsyncThunk(
	reducerPath + "/get-list",
	(_, { dispatch }) => {
		dispatch(todoSlice.actions.changeValue(true))
		return axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => console.log(res))
		.finally(() => {
			dispatch(todoSlice.actions.changeValue(false))
		})
	}
);


//selectors 
//											'entities/todo'
const baseSelector = createBaseSelector<State>(reducerPath)
const isUsersLoading = createSelector(
	baseSelector,
	(state) => state.isLoading
)


export const actions = {
	getList,
}

export const selectors = {
	isUsersLoading
}

export const reducers = {[reducerPath]: todoSlice.reducer}