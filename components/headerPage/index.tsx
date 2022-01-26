import React from 'react'
import styles from './headerPage.module.scss'
import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

export enum TYPE_HEADER {
    nobg,
    bg,
}

interface Props {
    type: TYPE_HEADER
}

const HeaderPage = (props: Props) => {
    return (
        <nav
            className={
                props.type === TYPE_HEADER.bg
                    ? `${styles.headerbg} ${styles.header}`
                    : `${styles.headernobg} ${styles.header}`
            }
        >
            <div className={styles.header__content}>
                <Link href="/" passHref>
                    <img
                        className={styles.header__imagen}
                        src="/assets/logo_rimac.svg"
                        alt="Logo de Rimac"
                    />
                </Link>
                <a className={styles.header__info} href="tel:+5114116001">
                    <FaPhoneAlt />
                </a>
            </div>
        </nav>
    )
}
export default HeaderPage
