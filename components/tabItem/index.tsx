import React, { useState } from 'react'
import AddService from '../addService'
import styles from './tabItem.module.scss'
import { useMediaQuery } from 'react-responsive'
import ToogleButton from '../toogleButton'

type Props = {
    imagen: string
    name: string
    description: string
    onClick?: () => any
}

const TabItem = (props: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })

    return (
        <div className={styles.tabItem}>
            <div className={styles.tabItem__content}>
                <img
                    src={`/assets/${props.imagen}`}
                    className={styles.tabItem__content__icono}
                    alt={`imagen de ${props.name}`}
                />
                <div className={styles.tabItem__content__header}>
                    {DesktopScreen ? (
                        <div aria-hidden={show} onClick={() => setShow(!show)}>
                            {props.name}
                        </div>
                    ) : (
                        <div aria-hidden={show}>
                            {props.name}
                            <p onClick={() => setShow(!show)}>Ver más</p>
                        </div>
                    )}

                    {DesktopScreen ? (
                        <AddService onClick={() => props.onClick} />
                    ) : (
                        <ToogleButton onClick={() => props.onClick} />
                    )}
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
