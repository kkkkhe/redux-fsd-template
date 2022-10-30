import { Action, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { map, Observable, switchMap } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { createBaseSelector } from "../../../shared/lib/redux-std";

const initialState = {
	isLoading: false,
	user: null
}
type State = typeof initialState
const reducerPath = 'entities/todo'
export const slice = createSlice({
	name: reducerPath,
	initialState,
	reducers: {
		userLoading(state, action: PayloadAction<number>){
			console.log('STARTLOADING')
			state.isLoading = true
		},
		endLoading(state){
			console.log('ENDLOADING')
			state.isLoading = false
		},
		succeedLoading(state){
			state
		}
	}
})

const getListEpic = (action$:Observable<Action>):Observable<Action> => action$.pipe(
	ofType(reducerPath + '/userLoading'),
	switchMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/users/1').pipe(
			map(response => {
				console.log(response)
			}),
		)
	),
	map(() => slice.actions.endLoading())
)

//selectors 
//											'entities/todo'
const baseSelector = createBaseSelector<State>(reducerPath)
const isUsersLoading = createSelector(
	baseSelector,
	(state) => state.isLoading
)


export const actions = {
	userLoading: slice.actions.userLoading,
}

export const selectors = {
	isUsersLoading
}

export const reducers = {[reducerPath]: slice.reducer}

export const epics = {
	getListEpic
}