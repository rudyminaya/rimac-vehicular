import React from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import getFontSize, { FontSize } from '../../styles/FontSize'

type Props = {
    texto: string
    textoEnfasis?: string
    fontSize?: FontSize
    color?: Color
    enfasisColor?: Color
    fontFamily?: FontFamily
}

const TextComponents = (props: Props) => {
    return (
        <p
            style={{
                fontSize: getFontSize(props.fontSize || 'normal'),
                color: props.color,
                fontFamily: props.fontFamily,
                lineHeight: '36px',
            }}
        >
            {props.texto}
            {props.textoEnfasis ? ' ' : ''}
            <span style={{ color: props.enfasisColor }}>
                {props.textoEnfasis}
            </span>
        </p>
    )
}

export default TextComponents
