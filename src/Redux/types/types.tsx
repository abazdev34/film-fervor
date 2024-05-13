/** @format */

import { ActionTypes } from "./ActionTypes"

export interface IFilms {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
export interface IState {
	balance: number
	films: IFilms[]
}
export interface IGetProducts {
	type: typeof ActionTypes.GET_FILMS
}

export type IActionTypes = IGetProducts
