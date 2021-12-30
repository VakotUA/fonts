import React from 'react';
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { fontAdded } from './fontSlice';

export function BuyNewFonts() {
	const dispatch = useDispatch()
	return (
		<h1
		// тестовая возможность добавить элемент
		onClick={() => dispatch(fontAdded({ id: nanoid(), abbr: "M", color: "#00A653", colorBlindLabel: "green", label: "Merriweather project is led by Sorkin Type", isActive: false }))}
		>
			Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor.
		</h1>
	)
}
