/** @format */
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { IoNotificationsOutline } from "react-icons/io5"
import { LuUser } from "react-icons/lu"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/logo.svg"
import "./Header.scss"
const Header = () => {
	const [isSearchIcon, setIsSearchIcon] = useState<boolean>(false)

	const handleSearchIconClick = () => {
		setIsSearchIcon(!isSearchIcon)
	}
	return (
		<div id="header">
			<div className="header__inner container">
				<div className="header__logo logo">
					<NavLink to="/">
						<img
							height="66px"
							width="160px"
							className="logo__image"
							src={Logo}
							alt="film-fervor"
							loading="lazy"
						/>
					</NavLink>

					<nav
						className="header__menu "
						style={{
							display: isSearchIcon ? "none" : "flex",
						}}
					>
						<ul className="header__menu__list">
							<li className="header__menu-item">
								<NavLink className="header__menu-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink className="header__menu-link" to="/popular">
									Popular
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink className="header__menu-link" to="/now-playing">
									Now Playing
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink className="header__menu-link" to="/top-rated">
									Top Rated
								</NavLink>
							</li>
							<li className="header__menu-item">
								<NavLink className="header__menu-link" to="/upcoming">
									Upcoming
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>

				<div
					className="header__right__block  pl-[10%]"
					style={{
						width: isSearchIcon ? "90%" : "30%",
					}}
				>
					<input
						style={{
							width: isSearchIcon ? "200%" : "0%",
						}}
						height={isSearchIcon ? "60px" : "0px"}
						className="header__search input"
					/>

					<div className="w-[100%] flex  gap-4 ml-0  justify-end">
						<button onClick={handleSearchIconClick}>
							<FiSearch />
						</button>
						<button className="header__button button button__buy">
							buy for 50$
						</button>
						<button>
							<IoNotificationsOutline />
						</button>
						<button className="border">
							<LuUser />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
