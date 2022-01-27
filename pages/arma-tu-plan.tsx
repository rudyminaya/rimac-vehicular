import Head from 'next/head'
import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import DetailsCar from '../components/detailsCar'
import PlanDetails from '../components/planDetails'
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
                        name="Juan"
                        placa="C2U-114"
                        modeloAuto="Wolkswagen 2019 Golf"
                    />
                </div>
                <div></div>
            </main>
        </>
    )
}

export default Cotizacion
