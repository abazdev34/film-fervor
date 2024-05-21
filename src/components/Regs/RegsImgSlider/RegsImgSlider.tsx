/** @format */

import { useEffect } from "react"
import { UseTypedDispatch } from "../../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../../Redux/customHooks/useTypedSelectorHook"

import "./RegsImgSlider.scss"

export function RegsImgSLider() {
	const { getFilms } = UseTypedDispatch()
	const films = useTypedSelectorHook(state => state.user.films)
	useEffect(() => {
		getFilms("2", "popular")
	}, [])
	return (
		<div>
			<div className="regs__img">
				<div className="left__column">
					{films &&
						films
							.slice(0, 8)
							.map(film => (
								<img
									className="regs__img__poster__first"
									width="300px"
									src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`}
									alt=""
								/>
							))}
				</div>
				<div className="right__column">
					{films &&
						films
							.slice(8, 17)
							.map(film => (
								<img
									className="regs__img__poster__third"
									width="300px"
									src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`}
									alt=""
								/>
							))}
				</div>
			</div>
		</div>
	)
}
