import UserReducer from "./UserReducer"
import { combineReducers } from 'redux';
 const rootReducer = combineReducers({
	user: UserReducer
})

export type RootState = ReturnType<typeof rootReducer>;
