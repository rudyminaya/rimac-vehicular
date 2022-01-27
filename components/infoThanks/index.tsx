import React from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import FontSize from '../../styles/FontSize'
import TextComponents from '../textComponents'
import styles from './infoThanks.module.scss'
import { useMediaQuery } from 'react-responsive'
import Boton, { TYPE_BUTTON } from '../boton'
import Link from 'next/link'

type Props = {}

const InfoThanks = (props: Props) => {
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    return (
        <div className={styles.infoThanks}>
            <div className={styles.infoThanks__title}>
                <TextComponents
                    texto="¡Te damos la bienvenida!"
                    color={Color.redRimac}
                    fontFamily={FontFamily.lato}
                    fontSize={DesktopScreen ? FontSize.big : FontSize.xxl}
                />
                <TextComponents
                    texto="Cuenta con nosotros para proteger tu vehículo"
                    color={Color.grayTitle}
                    fontFamily={FontFamily.lato}
                    fontSize={DesktopScreen ? FontSize.big : FontSize.xxl}
                />
            </div>
            <div className={styles.infoThanks__details}>
                <TextComponents
                    texto="Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:"
                    color={Color.grayText}
                    fontFamily={FontFamily.roboto}
                    fontSize={FontSize.md}
                />

                <a href="mailto:joel.sanchez@gmail.com">
                    <TextComponents
                        texto="joel.sanchez@gmail.com"
                        color={Color.grayText}
                        fontFamily={FontFamily.roboto}
                        fontSize={FontSize.md}
                    />
                </a>
            </div>
            <div className={styles.infoThanks__boton}>
                <Link href="/" passHref>
                    <Boton
                        textButton="Cómo usar mi seguro"
                        type={TYPE_BUTTON.button}
                    />
                </Link>
            </div>
            <div className={styles.infoThanks__footer}>
                <TextComponents
                    texto="© 2021 RIMAC Seguros y Reaseguros."
                    color={Color.placeholder}
                    fontFamily={FontFamily.roboto}
                    fontSize={FontSize.sm}
                />
            </div>
        </div>
    )
}

export default InfoThanks
