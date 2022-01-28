import React from 'react'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import { formatoMiles } from '../../utils/numberFormater'
import Counter from '../counter'
import TextComponents from '../textComponents'
import styles from './rangeCoverage.module.scss'

type Props = {
    minRange: number
    maxRange: number
    currentCount: number
    onMinus: () => void
    onPlus: () => void
}

const RangeCoverage = (props: Props) => {
    return (
        <div className={styles.rangeCoverage}>
            <div className={styles.rangeCoverage__range}>
                <TextComponents
                    texto="Indica la suma asegurada"
                    fontSize="md"
                    color={Color.grayTitle}
                    fontFamily={FontFamily.lato}
                />
                <div className={styles.rangeCoverage__range__items}>
                    <TextComponents
                        texto={`MIN $${formatoMiles(props.minRange)}`}
                    />{' '}
                    |{' '}
                    <TextComponents
                        texto={`MAX $${formatoMiles(props.maxRange)}`}
                    />
                </div>
            </div>
            <Counter
                minCount={props.minRange}
                maxCount={props.maxRange}
                currentCount={props.currentCount}
                onMinus={props.onMinus}
                onPlus={props.onPlus}
            />
        </div>
    )
}

export default RangeCoverage
