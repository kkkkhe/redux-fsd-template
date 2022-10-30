import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { todoModel } from "../../entities/todo";


const rootReducer = combineReducers({
	todoSlice: todoModel.todoSlice.reducer
})

const epicMiddleware = createEpicMiddleware()
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(epicMiddleware)
})


export type RootState = ReturnType<typeof store.getState>