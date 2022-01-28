import React, { useState } from 'react'
import styles from './addService.module.scss'

type Props = {
    added: boolean
    onClick: (e: any) => void
}

const AddService = (props: Props) => {
    return (
        <button onClick={props.onClick} className={styles.addService}>
            <span className={styles.addService__icon}>
                {props.added ? '-' : '+'}
            </span>
            {props.added ? 'Quitar' : 'Agregar'}
        </button>
    )
}

export default AddService
