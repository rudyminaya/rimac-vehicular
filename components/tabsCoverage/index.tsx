import React, { useContext, useState } from 'react'
import { Store } from '../../context/Store'
import Cobertura from '../../models/cobertura'
import TabItem from '../tabItem'
import styles from './tabsCoverage.module.scss'
import * as Generator from '../../utils/actionGenerator'

export type TabObject = {
    name: string
    id: number
}

type Props = {
    tabTag: TabObject[]
}

const TabsCoverage = (props: Props) => {
    const [selected, setSelected] = useState<number>(0)

    const { state, dispatch } = useContext(Store)

    const agregarCobertura = (cobertura: Cobertura) => {
        dispatch(Generator.seleccionarCobertura(cobertura))
    }

    const quitarCobertura = (cobertura: Cobertura) => {
        dispatch(Generator.deseleccionarCobertura(cobertura))
    }

    return (
        <>
            <div className={styles.tabsCoverage}>
                {props.tabTag.map((e, i) => {
                    return (
                        <div
                            className={`${styles.tabsCoverage__tab} ${
                                selected === i
                                    ? styles.tabsCoverage__selected
                                    : ''
                            }`}
                            onClick={() => {
                                setSelected(i)
                            }}
                            key={`tab-${i}`}
                        >
                            {e.name}
                        </div>
                    )
                })}
            </div>
            <div className={styles.tabsCoverage__item}>
                {selected === 0 ? (
                    state.coberturas.map((e, i) => {
                        return (
                            <TabItem
                                key={`item-cobertura-${i}`}
                                cobertura={e}
                                agregarCobertura={() => agregarCobertura(e)}
                                quitarCobertura={() => quitarCobertura(e)}
                            />
                        )
                    })
                ) : (
                    <div>Próximamente</div>
                )}
            </div>
        </>
    )
}

export default TabsCoverage
