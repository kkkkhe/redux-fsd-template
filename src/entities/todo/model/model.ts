import { Action, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, debounce, debounceTime, distinctUntilChanged, map, mergeMap, Observable, startWith, switchMap, tap } from "rxjs";
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

// const getListEpic = (action$:Observable<Action>):Observable<Action> => action$.pipe(
// 	ofType(reducerPath + '/userLoading'),
// 	switchMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/users/1').pipe(
// 			tap((response:any) => {
// 				console.log(Object.values(response).map(el => typeof el ==='number'? el * 10 : el))
// 			}),
// 		)
// 	),
// 	map(() => slice.actions.endLoading())
// )
// const getListEpic = (action$:Observable<Action>):Observable<Action> => action$.pipe(
// 	ofType(reducerPath + '/userLoading'),
// 	switchMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/users/1').pipe(
// 			tap((response:any) => {
// 				console.log(response)
// 			}),
// 			catchError((error) => error),
// 		)
// 	),
// 	map(() => slice.actions.endLoading())
// )

const getListEpic = (action$:Observable<Action>):Observable<Action> => action$.pipe(
	ofType(reducerPath + '/userLoading'),
	debounceTime(500),
	distinctUntilChanged(),
	mergeMap((action:any) => ajax.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`).pipe(
			map((response:any) => {
				return response
			}),
			catchError((error) => error),
		)
	),
	// map(() => slice.actions.endLoading())
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