import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(id) {
	function changeActivePage(key) {
		if (key === 0) {
			document.getElementById('my-fonts-btn').classList.add("active")
			document.getElementById('buy-fonts-btn').classList.remove("active")
		}
		else if (key === 1) {
			document.getElementById('my-fonts-btn').classList.remove("active")
			document.getElementById('buy-fonts-btn').classList.add("active")
		}
	}

	return (
		<div className="navbar">
			<h1>Please select one font</h1>
			<div>
				<Link to="/fonts/myfonts" id="my-fonts-btn" className="btn active" onClick={() => changeActivePage(0)}>MY FONTS</Link>
				<Link to="/fonts/buynewfonts" id="buy-fonts-btn" className="btn" onClick={() => changeActivePage(1)}>BUY FONTS</Link>
			</div>
		</div>
	)
}

export default Navbar;