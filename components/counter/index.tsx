import React, { useState } from 'react'
import { formatoMiles } from '../../utils/numberFormater'
import styles from './counter.module.scss'

type Props = {
    minCount: number
    maxCount: number
    currentCount: number
    onPlus: () => void
    onMinus: () => void
}

const Counter = (props: Props) => {
    return (
        <div className={styles.counter}>
            <button
                className={styles.counter__indicator}
                onClick={props.onMinus}
                disabled={props.currentCount === props.minCount ? true : false}
            >
                -
            </button>
            <p className={styles.counter__count}>{`$ ${formatoMiles(
                props.currentCount
            )}`}</p>
            <button
                className={styles.counter__indicator}
                onClick={props.onPlus}
                disabled={props.currentCount === props.maxCount ? true : false}
            >
                +
            </button>
        </div>
    )
}

export default Counter
