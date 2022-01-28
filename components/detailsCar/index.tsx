import { useRouter } from 'next/router'
import React from 'react'
import FontFamily from '../../styles/FontFamily'
import TextComponents from '../textComponents'
import { useMediaQuery } from 'react-responsive'
import styles from './detailsCar.module.scss'
import Color from '../../styles/Color'
import BackCircleButton from '../backCircleButton'

type Props = {
    name: string
    placa: string
    modeloAuto: string
}

const DetailsCar = (props: Props) => {
    const router = useRouter()
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })

    return (
        <div className={styles.detailsCar}>
            <div className={styles.detailsCar__back}>
                <BackCircleButton
                    background={Color.white}
                    borderColor={Color.redRimac}
                    color={Color.redRimac}
                    onClick={router.back}
                />
                <TextComponents
                    texto="VOLVER"
                    color={Color.placeholder}
                    fontFamily={FontFamily.lato}
                    fontSize={'sm'}
                />
            </div>
            <TextComponents
                texto={DesktopScreen ? '¡Hola,' : 'Mira las coberturas'}
                textoEnfasis={DesktopScreen ? `${props.name}!` : ''}
                color={Color.grayTitle}
                enfasisColor={Color.redRimac}
                fontFamily={FontFamily.lato}
                fontSize={DesktopScreen ? '3xl' : 'xxl'}
            />
            <TextComponents
                texto="Conoce las coberturas para tu plan"
                color={Color.grayText}
                fontFamily={FontFamily.lato}
                fontSize="md"
            />
            <div className={styles.detailsCar__card}>
                <div className={styles.detailsCar__card__text}>
                    <TextComponents
                        texto={`Placa: ${props.placa.toUpperCase()}`}
                        color={Color.placeholder}
                        fontSize={'normal'}
                        fontFamily={FontFamily.roboto}
                    />
                    <TextComponents
                        texto={props.modeloAuto}
                        color={Color.grayTitle}
                        fontSize={DesktopScreen ? 'large' : 'md'}
                        fontFamily={FontFamily.lato}
                    />
                </div>
                <img
                    className={styles.detailsCar__imagen}
                    src="/assets/profile_details_card.png"
                    alt="imagen de un agente de Rimac Seguros levantando el dedo pulgar en señal de conformidad"
                />
            </div>
        </div>
    )
}

export default DetailsCar
