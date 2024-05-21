/** @format */

import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Header from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { NowPlaying } from "./pages/NowPlaying/NowPlaying"
import { Popular } from "./pages/Popular/Popular"
import { TopRated } from "./pages/TopRated/TopRated"
import { UpComing } from "./pages/UpComing/UpComing"
export default function App() {
	return (
		<div className="container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/popular" element={<Popular />} />
				<Route path="/top-rated" element={<TopRated />} />
				<Route path="/now-playing" element={<NowPlaying />} />
				<Route path="/upcoming" element={<UpComing />} />
			</Routes>
		</div>
	)
}
