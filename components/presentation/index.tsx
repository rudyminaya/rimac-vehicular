import React from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import TextComponents from '../textComponents'
import styles from './presentation.module.scss'

export enum TYPE_PRESENTATION {
    mobile,
    desktop,
}

type Props = {
    type: TYPE_PRESENTATION
}

const Presentation = (props: Props) => {
    const mobile = TYPE_PRESENTATION.mobile
    const desktop = TYPE_PRESENTATION.desktop
    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__content}>
                <div className={styles.presentation__text}>
                    <strong>
                        <TextComponents
                            texto="¡NUEVO!"
                            color={Color.grayTitle}
                            fontFamily={FontFamily.lato}
                            fontSize={props.type == mobile ? 'xs' : 'sm'}
                        />
                    </strong>
                    <div className={styles.presentation__text__title}>
                        <TextComponents
                            texto="Seguro"
                            textoEnfasis="Vehicular Tracking"
                            fontSize={'big'}
                            fontFamily={FontFamily.lato}
                            color={Color.grayTitle}
                            enfasisColor={Color.redRimac}
                        />
                    </div>
                    <TextComponents
                        texto="Cuentanos donde le haras seguimiento a tu seguro"
                        color={Color.grayText}
                        fontFamily={FontFamily.lato}
                        fontSize={'normal'}
                    />
                    {props.type == mobile ? (
                        ''
                    ) : (
                        <div className={styles.presentation__copyright}>
                            <TextComponents
                                texto="© 2021 RIMAC Seguros y Reaseguros."
                                fontFamily={FontFamily.roboto}
                                fontSize={'sm'}
                                color={Color.placeholder}
                            />
                        </div>
                    )}
                </div>
                <div className={styles.presentation__imagen}>
                    <img
                        src={`/assets/${
                            props.type == mobile
                                ? 'rimac_mobile_main.png'
                                : 'rimac_desktop_main.svg'
                        }`}
                        alt="Persona con un celular y la app de Rimac Seguro Vehicular"
                    />
                </div>
            </div>
        </div>
    )
}

export default Presentation
