import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Color from '../../styles/Color'
import styles from './backCircleButton.module.scss'

type Props = {
    onClick?: () => any
    background: Color
    color: Color
    borderColor: Color
}

const BackCircleButton = (props: Props) => {
    return (
        <a
            onClick={props.onClick}
            className={styles.backCircleButton}
            style={{
                background: props.background,
                color: props.color,
                borderColor: props.borderColor,
                cursor: props.onClick ? 'pointer' : 'default',
            }}
        >
            <IoIosArrowBack />
        </a>
    )
}

export default BackCircleButton
