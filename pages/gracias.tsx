import React from 'react'
import HappyGuy from '../components/thanks/happyGuy'
import InfoThanks from '../components/thanks/infoThanks'
import styles from '../styles/gracias.module.scss'

const Gracias = () => {
    return (
        <main className={styles.gracias}>
            <HappyGuy />
            <InfoThanks />
        </main>
    )
}

export default Gracias
