import React from 'react'
import styles from './boton.module.scss'

export enum TYPE_BUTTON {
    submit = 'submit',
    button = 'button',
}

type Props = {
    type: TYPE_BUTTON
    textButton: string
    onClick?: () => any
}

const Boton = (props: Props) => {
    return (
        <button
            type={props.type}
            className={styles.boton}
            onClick={props.onClick}
        >
            {props.textButton}
        </button>
    )
}

export default Boton
