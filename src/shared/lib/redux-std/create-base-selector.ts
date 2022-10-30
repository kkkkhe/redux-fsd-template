import { rootState } from "./root-state"
									//entities/todo
export const createBaseSelector = <T>(rootKey: string) => {
	return (state: rootState) => {
		if(rootKey in state) {
			return state[rootKey] as T
		}
		else {
			throw new Error(`Reducer ${rootKey} isn't registered`)
		}
	}
}