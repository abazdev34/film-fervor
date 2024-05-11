import { IActionTypes } from './types/types'

interface IState{
	balance: number
}

const initialState:IState={
	balance:0
}

const UserReducer = (state=initialState,action:IActionTypes)=>{
	
switch(action.type)
{  
	
	default:
	return state
} 
}
export default UserReducer