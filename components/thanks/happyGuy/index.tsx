import React from 'react'
import styles from './happyGuy.module.scss'
type Props = {}

const HappyGuy = (props: Props) => {
    return (
        <div className={styles.happyGuy}>
            <div className={styles.happyGuy__sofa}>
                <img src="/assets/sofa_gracias.png" alt="" />
            </div>
            <img
                className={styles.happyGuy__guy}
                src="/assets/gracias_happy_guy.png"
                alt="Hombre feliz con el uniforme de Rimac Seguros"
            />
        </div>
    )
}

export default HappyGuy
