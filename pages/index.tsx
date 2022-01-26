import type { NextPage } from 'next'
import Head from 'next/head'
import Presentation, {
    TYPE_PRESENTATION,
} from '../components/home/presentation'
import styles from '../styles/home.module.scss'
import { useMediaQuery } from 'react-responsive'

const Home: NextPage = () => {
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    return (
        <>
            <Head>
                <title>Seguro Vehicular | RIMAC Seguros</title>
                <meta
                    name="description"
                    content="El Seguro Vehicular RIMAC protege tu auto y a sus ocupantes ante siniestros. Elige tu plan vehicular ideal y aprovecha los beneficios que tenemos para ti."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.mainContainer}>
                <Presentation
                    type={
                        DesktopScreen
                            ? TYPE_PRESENTATION.desktop
                            : TYPE_PRESENTATION.mobile
                    }
                />
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        background: '#20a6ff',
                    }}
                ></div>
            </div>
        </>
    )
}

export default Home
