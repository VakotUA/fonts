import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from './fontSlice';

export function FontList() {
  const fontList = useSelector(state => state.fonts)
  const dispatch = useDispatch()

  return (
    <ul className="font-list"> 
      {fontList.map((item) => 
        <li key={item.id} className={"font-block " + (item.isActive ? "active" : "")} onClick={() => dispatch(select({id: item.id}))}>
          <span className="font-color-block" style={{backgroundColor: item.color}}>{item.abbr}</span>
          <p>{item.label}</p>
        </li>
      )}
    </ul>
  )
}