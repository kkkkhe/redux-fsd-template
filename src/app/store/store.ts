import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { listModel } from "../../entities/todo";




const epicMiddleware = createEpicMiddleware()
export const store = configureStore({
	reducer: {
		...listModel.reducers,
	},
	middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(epicMiddleware)
})


export type RootState = ReturnType<typeof store.getState>