import Head from 'next/head'

import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import styles from '../styles/armaTuPlan.module.scss'

const Cotizacion = () => {
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
            <main className={styles.cotizacion}>
                <Breadcrumb />
                <div></div>
                <div></div>
            </main>
        </>
    )
}

export default Cotizacion
