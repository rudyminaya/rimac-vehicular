import React, { useState } from 'react'
import styles from './counter.module.scss'

type Props = {
    minCount: number
    maxCount: number
}

const Counter = (props: Props) => {
    const [count, setCount] = useState<number>(props.minCount)

    const aumentar = () => {
        setCount(count + 100)
        //console.log('aumentando ' + count)
    }
    const disminuir = () => {
        setCount(count - 100)
        //console.log('disminuyendo ' + count)
    }

    return (
        <div className={styles.counter}>
            <button
                className={styles.counter__indicator}
                onClick={disminuir}
                disabled={count === props.minCount ? true : false}
            >
                -
            </button>
            <p className={styles.counter__count}>{`$ ${count}`}</p>
            <button
                className={styles.counter__indicator}
                onClick={aumentar}
                disabled={count === props.maxCount ? true : false}
            >
                +
            </button>
        </div>
    )
}

export default Counter
