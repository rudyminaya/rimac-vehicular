import React, { useState } from 'react'
import styles from './addService.module.scss'

type Props = {
    onClick: () => any
}

const AddService = (props: Props) => {
    const [addService, setAddService] = useState<boolean>(false)
    return (
        <button
            onClick={() => {
                props.onClick
                setAddService(!addService)
            }}
            className={styles.addService}
        >
            <span className={styles.addService__icon}>
                {addService ? '-' : '+'}
            </span>
            {addService ? 'Quitar' : 'Agregar'}
        </button>
    )
}

export default AddService
