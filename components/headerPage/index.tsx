import React, { useContext, useEffect } from 'react'
import styles from './headerPage.module.scss'
import { FaPhoneAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { Store } from '../../context/Store'
import { limpiarDatos } from '../../utils/actionGenerator'

export enum TYPE_HEADER {
    nobg,
    bg,
}

interface Props {
    type: TYPE_HEADER
}

const HeaderPage = (props: Props) => {
    const { state, dispatch } = useContext(Store)
    const router = useRouter()

    useEffect(() => {
        if (!state.cliente || !state.vehiculo) {
            router.push('/')
        }
    }, [state.cliente, state.vehiculo])

    const wipeData = () => {
        const limpiar = limpiarDatos()
        dispatch(limpiar)
    }

    return (
        <nav
            className={
                props.type === TYPE_HEADER.bg
                    ? `${styles.headerbg} ${styles.header}`
                    : `${styles.headernobg} ${styles.header}`
            }
        >
            <div className={styles.header__content}>
                <a onClick={wipeData}>
                    <img
                        className={styles.header__imagen}
                        src="/assets/logo_rimac.svg"
                        alt="Logo de Rimac"
                    />
                </a>
                <a className={styles.header__info} href="tel:+5114116001">
                    <FaPhoneAlt />
                </a>
            </div>
        </nav>
    )
}
export default HeaderPage
