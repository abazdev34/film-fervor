/** @format */

import { IActionTypes, IState } from "./types/types"

const initialState: IState = {
	balance: 0,
	films: [],
}

const UserReducer = (state = initialState, action: IActionTypes) => {
	switch (action.type) {
		default:
			return state
	}
}
export default UserReducer
