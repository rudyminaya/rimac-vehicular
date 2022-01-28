import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import HappyGuy from '../components/happyGuy'
import InfoThanks from '../components/infoThanks'
import { Store } from '../context/Store'
import styles from '../styles/gracias.module.scss'
import { limpiarDatos } from '../utils/actionGenerator'

const Gracias = () => {
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

    if (!state.cliente) {
        return <></>
    }

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
                <InfoThanks
                    email={state.cliente.email}
                    valorPrima={state.primaElegida}
                    onClick={wipeData}
                />
            </main>
        </>
    )
}

export default Gracias
