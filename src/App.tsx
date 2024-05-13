/** @format */

import { useEffect } from "react"
import Header from "./components/header/Header"
import { UseTypedDispatch } from "./Redux/customHooks/UseTypedDispatch"

function App() {
	const { getFilms } = UseTypedDispatch()
	useEffect(() => {
		getFilms("popular")
	},[])
	return (
		<div>
			<Header />
			<h1>Hiii</h1>
		</div>
	)
}

export default App
