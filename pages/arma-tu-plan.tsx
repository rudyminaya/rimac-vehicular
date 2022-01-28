import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import DetailsCar from '../components/detailsCar'
import styles from '../styles/armaTuPlan.module.scss'
import RangeCoverage from '../components/rangeCoverage'
import Coverage from '../components/coverage'
import Subtotal from '../components/subtotal'
import { Store } from '../context/Store'
import { useRouter } from 'next/router'
import {
    aumentarSumaAsegurada,
    guardarPrima,
    limpiarDatos,
    reducirSumaAsegurada,
} from '../utils/actionGenerator'
import { getPrima } from '../controllers/vehiculo'

const Cotizacion = () => {
    const { state, dispatch } = useContext(Store)
    const [prima, setPrima] = useState<number>(20)

    const router = useRouter()

    useEffect(() => {
        if (!state.cliente || !state.vehiculo) {
            dispatch(limpiarDatos())
            router.push('/')
        }
    }, [])

    const masValor = () => {
        const add = aumentarSumaAsegurada()
        dispatch(add)
    }

    const menosValor = () => {
        const remove = reducirSumaAsegurada()
        dispatch(remove)
    }

    useEffect(() => {
        if (state.vehiculo) {
            const primaActual = getPrima(
                state.vehiculo.valorAsegurado,
                state.coberturas
            )
            setPrima(primaActual)
        }
    }, [state.vehiculo?.valorAsegurado, state.coberturas])

    const adquirirPrima = () => {
        dispatch(guardarPrima(prima))
        router.push('/gracias')
    }

    if (!state.cliente || !state.vehiculo) {
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
            <main className={styles.cotizacion}>
                <Breadcrumb
                    steps={[
                        {
                            name: 'Datos',
                            link: '/',
                        },
                        {
                            name: 'Arma tu plan',
                            link: '/arma-tu-plan',
                            selected: true,
                        },
                    ]}
                />
                <div className={styles.details}>
                    <DetailsCar
                        name={state.cliente.nombre}
                        placa={state.cliente.placa}
                        modeloAuto={`${state.vehiculo.marca} ${state.vehiculo.anio} ${state.vehiculo.modelo}`}
                    />
                    <RangeCoverage
                        minRange={state.vehiculo.valorMinAsegurado}
                        maxRange={state.vehiculo.valorMaxAsegurado}
                        currentCount={state.vehiculo.valorAsegurado}
                        onPlus={masValor}
                        onMinus={menosValor}
                    />
                    <Coverage />
                </div>
                <div className={styles.subtotal}>
                    <Subtotal
                        base={prima}
                        onClick={adquirirPrima}
                        benefits={[
                            'Llanta de respuesto',
                            'Analisis de motor',
                            'Aros gratis',
                        ]}
                    />
                </div>
            </main>
        </>
    )
}

export default Cotizacion
