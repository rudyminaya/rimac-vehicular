import React, { useState } from 'react'
import Color from '../../styles/Color'
import styles from './toogleButton.module.scss'

type Props = {
    onClick: () => any
}

const ToogleButton = (props: Props) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <button
            onClick={props.onClick}
            className={styles.toogleButton}
            style={{
                background: `${state ? Color.green : Color.borderOpacity}`,
            }}
        >
            <i
                onClick={() => setState(!state)}
                className={
                    state
                        ? `${styles.toogleButton__circle} ${styles.toogleButton__active}`
                        : styles.toogleButton__circle
                }
            ></i>
        </button>
    )
}

export default ToogleButton
