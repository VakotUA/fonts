import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from './fontSlice';
import styles from './Fonts.module.css';

export function FontList() {
  const fontList = useSelector(state => state.fonts)
  const dispatch = useDispatch()

  return (
    <ul className={styles.list}> 
      {fontList.map((item) => 
        <li key={item.id} 
        className={[styles.block,  item.isActive ? styles.active : ""].join(" ")} 
        onClick={() => dispatch(select({id: item.id}))}>

          <p className={styles.colorBlindLabel}>{item.colorBlindLabel}</p>

          <span 
          className={styles.color} 
          style={{backgroundColor: item.color}}>
            {item.abbr}
          </span>

          <p>{item.label}</p>
        </li>
      )}
    </ul>
  )
}
