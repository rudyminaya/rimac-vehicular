import { coberturasValidas } from '../controllers/coberturas'
import IAction, { ActionType } from '../models/actions'
import Cobertura from '../models/cobertura'
import Vehiculo from '../models/vehiculo'

export const datosIniciales = (
    tipoDoc: string,
    nroDoc: number,
    nroCel: number,
    placa: string,
    nombre: string,
    email: string
): IAction => {
    return {
        type: ActionType.guardarDatosIniciales,
        payload: {
            tipoDoc,
            nroDoc,
            nroCel,
            placa,
            nombre,
            email,
        },
    }
}

export const seleccionarCobertura = (cobertura: Cobertura): IAction => {
    return {
        type: ActionType.seleccionarCobertura,
        payload: cobertura,
    }
}

export const deseleccionarCobertura = (cobertura: Cobertura): IAction => {
    return {
        type: ActionType.deseleccionarCobertura,
        payload: cobertura,
    }
}

export const actualizarCoberturasValidas = (
    coberturas: Cobertura[]
): IAction => {
    return {
        type: ActionType.actualizarCoberturasValidas,
        payload: coberturas,
    }
}

export const aumentarSumaAsegurada = () => {
    return {
        type: ActionType.aumentarSumaAsegurada,
        payload: 100,
    }
}

export const reducirSumaAsegurada = () => {
    return {
        type: ActionType.reducirSumaAsegurada,
        payload: -100,
    }
}

export const guardarDatosVehiculo = (
    valorAsegurado: number,
    valorMinAsegurado: number,
    valorMaxAsegurado: number,
    marca: string,
    modelo: string,
    anio: number
) => {
    const vehiculo: Vehiculo = {
        valorAsegurado,
        valorMaxAsegurado,
        valorMinAsegurado,
        modelo,
        marca,
        anio,
    }

    return {
        type: ActionType.guardarDatosVehiculo,
        payload: vehiculo,
    }
}

export const guardarPrima = (prima: number) => {
    return {
        type: ActionType.guardarPrima,
        payload: prima,
    }
}

export const limpiarDatos = () => {
    return {
        type: ActionType.limpiarDatos,
        payload: undefined,
    }
}
