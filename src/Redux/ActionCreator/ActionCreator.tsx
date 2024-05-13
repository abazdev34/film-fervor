/** @format */

import axios from "axios"
import { Dispatch } from "redux"
import { key } from "../API_KEY/API_key"
import { ActionTypes } from "../types/ActionTypes"
import { IActionTypes } from "../types/types"

export const getFilms = () => async (dispatch: Dispatch<IActionTypes>) => {
	try {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${dispatch}`

		const response = await axios(url)

		console.log("data", response.data)
		dispatch({
			type: ActionTypes.GET_FILMS,
			payload: response.data,
		})
	} catch (error) {
		console.error("Error fetching films:", error)
	}
}
