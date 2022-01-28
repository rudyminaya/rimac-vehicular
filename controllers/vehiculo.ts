import Cobertura from '../models/cobertura'
import Vehiculo from '../models/vehiculo'

export const getVehiculo = async (): Promise<Vehiculo> => {
    const valorAsegurado = Math.round(Math.random() * 40000) + 10000

    return new Promise((res) => {
        res({
            anio: Math.round(Math.random() * 100) + 1922,
            marca: 'Volkswagen',
            modelo: 'Golf',
            valorAsegurado: valorAsegurado,
            valorMinAsegurado: valorAsegurado - 2000,
            valorMaxAsegurado: valorAsegurado + 2000,
        })
    })
}

export const getPrima = (valorAsegurado: number, coberturas: Cobertura[]) => {}
