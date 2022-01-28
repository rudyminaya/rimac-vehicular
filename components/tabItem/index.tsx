import React, { useState } from 'react'
import AddService from '../addService'
import styles from './tabItem.module.scss'

type Props = {
    imagen: string
    name: string
    description: string
    onClick?: () => any
}

const TabItem = (props: Props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className={styles.tabItem}>
            <div className={styles.tabItem__content}>
                <img
                    src={`/assets/${props.imagen}`}
                    className={styles.tabItem__content__icono}
                    alt={`imagen de ${props.name}`}
                />
                <div className={styles.tabItem__content__header}>
                    <p aria-hidden={show} onClick={() => setShow(!show)}>
                        {props.name}
                    </p>
                    <AddService onClick={() => props.onClick} />
                </div>
            </div>
            <div
                className={styles.tabItem__description}
                style={{ maxHeight: `${show ? '450px' : 0}` }}
            >
                {props.description}
            </div>
        </div>
    )
}

export default TabItem
