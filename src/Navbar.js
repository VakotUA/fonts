import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
	function changeActivePage() {
		document.getElementById('my-fonts-btn').classList.toggle("active")
		document.getElementById('buy-fonts-btn').classList.toggle("active")
	}

	return (
		<div className="navbar">
			<h1>Please select one font</h1>
			<div>
				<Link to="/fonts/myfonts" id="my-fonts-btn" className="btn active" onClick={() => changeActivePage()}>MY FONTS</Link>
				<Link to="/fonts/buynewfonts" id="buy-fonts-btn" className="btn" onClick={() => changeActivePage()}>BUY FONTS</Link>
			</div>
		</div>
	)
}

export default Navbar;