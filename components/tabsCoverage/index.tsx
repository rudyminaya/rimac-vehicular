import React, { useState } from 'react'
import { protegeTuAuto } from '../../data/protegeTuAuto'
import TabItem from '../tabItem'
import styles from './tabsCoverage.module.scss'

export type TabObject = {
    name: string
    id: number
}

type Props = {
    tabTag: TabObject[]
}

const TabsCoverage = (props: Props) => {
    const [selected, setSelected] = useState<number>(0)

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
                    protegeTuAuto.map((e, i) => {
                        return (
                            <TabItem
                                key={`item-cobertura-${i}`}
                                imagen={e.imagen}
                                name={e.name}
                                description={e.description}
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
