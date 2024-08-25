import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const handleScroll = () => {
		if (menuActive) {
			setMenuActive(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [menuActive]);

	return (
		<div>
			<section className='header'>
				
				<NavLink to='/' className='logo'>
        <FontAwesomeIcon className="icon" icon={faUserShield} beat/> Suraksha
				</NavLink>
		
				<nav className={`navbar ${menuActive ? "active" : ""}`}>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='https://t.me/+q1eqjkLLcS83ZDA1'>Join Community</NavLink>
					<NavLink to='/about'>About Us</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
					<NavLink to='/login'>Login</NavLink>
					<NavLink to='/signup'>Signup</NavLink>
				</nav>

				<div
					id='menu-btn'
					className={`fas fa-bars ${menuActive ? "fa-times" : ""}`}
					onClick={toggleMenu}></div>
			</section>
		</div>
	);
};

export default Navbar;
