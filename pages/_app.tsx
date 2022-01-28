import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import HeaderPage from '../components/headerPage'
import { TYPE_HEADER } from '../components/headerPage'
import StoreProvider from '../context/Store'

function MyApp({ Component, pageProps }: AppProps) {
    const path = useRouter().pathname

    return (
        <StoreProvider>
            {path === '/' ? (
                <HeaderPage type={TYPE_HEADER.nobg} />
            ) : (
                <HeaderPage type={TYPE_HEADER.bg} />
            )}
            <Component {...pageProps} />
        </StoreProvider>
    )
}
export default MyApp
