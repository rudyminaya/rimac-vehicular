import Head from 'next/head'
import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import DetailsCar from '../components/detailsCar'
import styles from '../styles/armaTuPlan.module.scss'
import RangeCoverage from '../components/rangeCoverage'
import Coverage from '../components/coverage'

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
                    <RangeCoverage minRange={12500} maxRange={16500} />
                    <Coverage />
                </div>
                <div></div>
            </main>
        </>
    )
}

export default Cotizacion
