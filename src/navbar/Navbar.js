import React from 'react';
import { NavLink  } from 'react-router-dom'
import styles from './Navbar.module.css';

function Navbar(id) {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.header}>Please select one font</h1>
			<div className={styles.btns}>
				<NavLink exact to="/fonts/myfonts" className={styles.btn} activeClassName={styles.active}>MY FONTS</NavLink>
				<NavLink to="/fonts/buynewfonts" className={styles.btn} activeClassName={styles.active}>BUY FONTS</NavLink>
			</div>
		</div>
	)
}

export default Navbar;
