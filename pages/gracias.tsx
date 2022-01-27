import Head from 'next/head'
import React from 'react'
import HappyGuy from '../components/happyGuy'
import InfoThanks from '../components/infoThanks'
import styles from '../styles/gracias.module.scss'

const Gracias = () => {
    return (
        <>
            <Head>
                <title>Seguro Vehicular | RIMAC Seguros</title>
                <meta
                    name="description"
                    content="El Seguro Vehicular RIMAC protege tu auto y a sus ocupantes ante siniestros. Elige tu plan vehicular ideal y aprovecha los beneficios que tenemos para ti."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.gracias}>
                <HappyGuy />
                <InfoThanks />
            </main>
        </>
    )
}

export default Gracias
