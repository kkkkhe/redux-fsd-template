import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";


const epicMiddleware = createEpicMiddleware()
export const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(epicMiddleware)
})


export type RootState = ReturnType<typeof store.getState>