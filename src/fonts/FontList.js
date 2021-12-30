import React from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { select } from './fontSlice';
import { createSelector } from 'reselect';

import styles from './Fonts.module.css';
import classNames from 'classnames';

// const fontListSelector = createSelector((state) => state.fonts)
// state.fonts = undefined

export function FontList() {
  // const fontList = useSelector(fontListSelector)

  const fontList = useSelector((state) => state.fonts)
  const dispatch = useDispatch()

  return (
    <ul className={styles.list}> 
      {fontList.map((item) => 
        <li key={item.id} 
        className={classNames(styles.block, {[styles.active]: item.isActive})}
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
