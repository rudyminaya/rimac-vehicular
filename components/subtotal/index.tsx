import React, { useState } from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import Boton, { TYPE_BUTTON } from '../boton'
import TextComponents from '../textComponents'
import styles from './subtotal.module.scss'
import { useMediaQuery } from 'react-responsive'
import { formatoDecimales } from '../../utils/numberFormater'

type Props = {
    base: number
    onClick: () => any
    benefits: string[]
}

const Subtotal = (props: Props) => {
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    const base: number = props.base
    return (
        <div className={styles.subtotal}>
            <div className={styles.subtotal__content}>
                <div className={styles.subtotal__summary}>
                    <strong>
                        <TextComponents
                            texto="MONTO"
                            fontFamily={FontFamily.lato}
                            fontSize="sm"
                            color={Color.grayText}
                        />
                    </strong>
                    <TextComponents
                        texto={`$${formatoDecimales(base)}`}
                        color={Color.grayText}
                        fontFamily={FontFamily.lato}
                        fontSize={DesktopScreen ? 'xxl' : 'xl'}
                    />
                    <strong>
                        <TextComponents
                            texto="MENSUAL"
                            fontFamily={FontFamily.lato}
                            fontSize={DesktopScreen ? 'sm' : 'xs'}
                            color={Color.grayText}
                        />
                    </strong>
                </div>
                <ul className={styles.subtotal__details}>
                    El precio Incluye:
                    {props.benefits.map((e, i) => {
                        return (
                            <li
                                key={`beneficio-${i}`}
                                className={styles.subtotal__details__item}
                            >
                                {e}
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.subtotal__conversion}>
                    <Boton
                        textButton="Lo quiero"
                        type={TYPE_BUTTON.button}
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Subtotal
