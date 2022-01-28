import React, { useState } from 'react'
import AddService from '../addService'
import styles from './tabItem.module.scss'
import { useMediaQuery } from 'react-responsive'
import ToogleButton from '../toogleButton'
import Cobertura from '../../models/cobertura'

type Props = {
    cobertura: Cobertura
    agregarCobertura: () => void
    quitarCobertura: () => void
}

const TabItem = ({
    cobertura: { imagen, name, description, selected },
    agregarCobertura,
    quitarCobertura,
}: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })

    const modificarCobertura = (e: any) => {
        e.preventDefault()
        if (selected) {
            quitarCobertura()
        } else {
            agregarCobertura()
        }
    }

    return (
        <div className={styles.tabItem}>
            <div className={styles.tabItem__content}>
                <img
                    src={`/assets/${imagen}`}
                    className={styles.tabItem__content__icono}
                    alt={`imagen de ${name}`}
                />
                <div className={styles.tabItem__content__header}>
                    {DesktopScreen ? (
                        <div aria-hidden={show} onClick={() => setShow(!show)}>
                            {name}
                        </div>
                    ) : (
                        <div aria-hidden={show}>
                            {name}
                            <p onClick={() => setShow(!show)}>Ver más</p>
                        </div>
                    )}

                    {DesktopScreen ? (
                        <AddService
                            onClick={modificarCobertura}
                            added={selected}
                        />
                    ) : (
                        <ToogleButton
                            onClick={modificarCobertura}
                            added={selected}
                        />
                    )}
                </div>
            </div>
            <div
                className={styles.tabItem__description}
                style={{ maxHeight: `${show ? '450px' : 0}` }}
            >
                {description}
            </div>
        </div>
    )
}

export default TabItem
