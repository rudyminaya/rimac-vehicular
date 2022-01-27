import React from 'react'
import { useRouter } from 'next/router'
import styles from './breadcrumb.module.scss'
import Link from 'next/link'
import BackCircleButton from '../backCircleButton'
import Color from '../../styles/Color'

type BreadcrumbStep = {
    name: string
    link: string
    selected?: boolean
}

type Props = {
    steps: BreadcrumbStep[]
}

const Breadcrumb = (props: Props) => {
    const router = useRouter()
    const totalSteps = props.steps.length
    const currentStep = props.steps.findIndex((e) => e.selected) + 1
    const barra = (100 * currentStep) / totalSteps - 100

    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumb__bar}>
                <BackCircleButton
                    onClick={router.back}
                    background={Color.white}
                    color={Color.placeholder}
                    borderColor={Color.placeholder}
                />
                <p className={styles.breadcrumb__bar__steps}>
                    Paso {currentStep} de {totalSteps}
                </p>
                <div className={styles.breadcrumb__bar__level}>
                    <div
                        style={{
                            left: `${barra}%`,
                        }}
                    ></div>
                </div>
            </div>
            <div className={styles.breadcrumb__sidebar}>
                <div className={styles.breadcrumb__box}>
                    {props.steps.map((e, i) => {
                        return e.selected ? (
                            <p
                                key={`stepBreadcrumb-${i}`}
                                className={`${styles.breadcrumb__box__item} ${styles.breadcrumb__box__active}`}
                            >
                                <span>{i + 1}</span> {e.name}
                            </p>
                        ) : (
                            <Link
                                key={`stepBreadcrumb-${i}`}
                                href={e.link}
                                passHref
                            >
                                <a className={styles.breadcrumb__box__item}>
                                    <span>{i + 1}</span> {e.name}
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
