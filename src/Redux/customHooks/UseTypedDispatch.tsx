/** @format */

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as IUserAction from "../ActionCreator/ActionCreator"
export const UseTypedDispatch = () => {
	const dispatch = useDispatch()

	return bindActionCreators(IUserAction, dispatch)
}
