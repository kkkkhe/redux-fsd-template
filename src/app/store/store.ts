import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { listModel } from "../../entities/todo";


const rootEpic = combineEpics(
	listModel.epics.getListEpic
)

const epicMiddleware = createEpicMiddleware()
export const store = configureStore({
	reducer: {
		...listModel.reducers,
	},
	middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>