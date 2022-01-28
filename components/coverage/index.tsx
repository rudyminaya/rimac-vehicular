import React from 'react'
import styles from './coverage.module.scss'
import Color from '../../styles/Color'
import FontFamily from '../../styles/FontFamily'
import TextComponents from '../textComponents'
import TabsCoverage from '../tabsCoverage'

type Props = {}

const Coverage = (props: Props) => {
    return (
        <div className={styles.coverage}>
            <TextComponents
                texto="Agrega o quita coberturas"
                color={Color.grayTitle}
                fontSize="large"
                fontFamily={FontFamily.lato}
            />
            <TabsCoverage
                tabTag={[
                    { name: 'Protege a tu auto', id: 0 },
                    { name: 'Protege a los que te rodean', id: 1 },
                    { name: 'mejora tu plan', id: 2 },
                ]}
            />
        </div>
    )
}

export default Coverage
