interface Routes {
    id: number
    name: string
    link: string
}

const RouteMap: Routes[] = [
    {
        id: 1,
        name: 'Datos',
        link: '/',
    },
    {
        id: 2,
        name: 'Arma tu plan',
        link: '/arma-tu-plan',
    },
]
export default RouteMap
