import React from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import TextComponents from '../textComponents'
import styles from './infoThanks.module.scss'
import { useMediaQuery } from 'react-responsive'
import Boton, { TYPE_BUTTON } from '../boton'

type Props = {
    valorPrima: number
    email: string
    onClick: () => void
}

const InfoThanks = (props: Props) => {
    console.log(props.email)
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    return (
        <div className={styles.infoThanks}>
            <div className={styles.infoThanks__title}>
                <TextComponents
                    texto="¡Te damos la bienvenida!"
                    color={Color.redRimac}
                    fontFamily={FontFamily.lato}
                    fontSize={DesktopScreen ? 'big' : 'xxl'}
                />
                <TextComponents
                    texto="Cuenta con nosotros para proteger tu vehículo"
                    color={Color.grayTitle}
                    fontFamily={FontFamily.lato}
                    fontSize={DesktopScreen ? 'big' : 'xxl'}
                />
            </div>
            <div className={styles.infoThanks__details}>
                <TextComponents
                    texto={`Enviaremos la confirmación de compra de tu Plan Vehícular Tracking por un valor de $${props.valorPrima} a tu correo:`}
                    color={Color.grayText}
                    fontFamily={FontFamily.roboto}
                    fontSize={'md'}
                />

                <a href={`mailto:${props.email}`}>
                    <TextComponents
                        texto={props.email}
                        color={Color.grayText}
                        fontFamily={FontFamily.roboto}
                        fontSize={'md'}
                    />
                </a>
            </div>
            <div className={styles.infoThanks__boton}>
                <Boton
                    onClick={props.onClick}
                    textButton="Cómo usar mi seguro"
                    type={TYPE_BUTTON.button}
                />
            </div>
            <div className={styles.infoThanks__footer}>
                <TextComponents
                    texto="© 2021 RIMAC Seguros y Reaseguros."
                    color={Color.placeholder}
                    fontFamily={FontFamily.roboto}
                    fontSize={'sm'}
                />
            </div>
        </div>
    )
}

export default InfoThanks
