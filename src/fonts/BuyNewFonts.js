import React, { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { fontAdded } from './fontSlice';
import styles from './Fonts.module.css';

function randomHexColor() {
	return '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
}

export function BuyNewFonts() {
	const [hexColor, setHexColor] = useState("")
	useEffect(() => {
		setHexColor(randomHexColor())
	}, [])

	const dispatch = useDispatch()

	return (
		<div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
			<h1>Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor.</h1>
			<div 
			className={styles.block}
			onClick={() => {
				dispatch(fontAdded({id: nanoid(), abbr: "L", color: hexColor, colorBlindLabel: "color", label: "Lorem ipsum dolor sit amet", isActive: false}))
				setHexColor(randomHexColor())
			}}>
				<span className={styles.color} style={{backgroundColor: hexColor}}>L</span>
				<p>Add new Font sample</p>
			</div>
		</div>
	)
}
