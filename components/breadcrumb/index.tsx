import React from 'react'
import { useRouter } from 'next/router'
import styles from './breadcrumb.module.scss'
import { useMediaQuery } from 'react-responsive'
import { IoIosArrowBack } from 'react-icons/io'
import RouteMap from '../../data/routemap'
import Link from 'next/link'

type Props = {}

const Breadcrumb = (props: Props) => {
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    const router = useRouter()
    const pathname = useRouter().pathname
    const totalSteps = RouteMap.length
    const currentStepObject = RouteMap.filter((e) => e.link === pathname)[0]

    const barra = (100 * currentStepObject.id) / totalSteps - 100
    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumb__bar}>
                <a
                    onClick={() => router.back()}
                    className={styles.breadcrumb__bar__back}
                >
                    <IoIosArrowBack />
                </a>
                <p className={styles.breadcrumb__bar__steps}>
                    Paso {currentStepObject.id} de {totalSteps}
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
                    {RouteMap.map((e, i) => {
                        return e.id === currentStepObject.id ? (
                            <p
                                className={`${styles.breadcrumb__box__item} ${styles.breadcrumb__box__active}`}
                            >
                                <span>{e.id}</span> {e.name}
                            </p>
                        ) : (
                            <Link key={i} href={e.link} passHref>
                                <a className={styles.breadcrumb__box__item}>
                                    <span>{e.id}</span> {e.name}
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
