import React, { createContext, useReducer } from 'react'
import { protegeTuAuto } from '../data/protegeTuAuto'
import IAction, { ActionType } from '../models/actions'
import Cliente from '../models/cliente'
import Cobertura from '../models/cobertura'
import IState from '../models/istate'
import Vehiculo from '../models/vehiculo'

const initialState: IState = {
    cliente: undefined,
    vehiculo: undefined,
    coberturas: protegeTuAuto,
}

interface IContext {
    state: IState
    dispatch: React.Dispatch<IAction>
}

export const Store = createContext<IContext>({
    state: initialState,
    dispatch: () => null,
})

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ActionType.guardarDatosIniciales: {
            const payload = action.payload as Cliente
            return {
                ...state,
                cliente: payload,
            }
        }
        case ActionType.guardarDatosDeAPI: {
            const payload = action.payload as Cliente
            if (!state.cliente) {
                return state
            }
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    nombre: payload.nombre,
                },
            }
        }
        case ActionType.seleccionarCobertura: {
            const payloadSelected = action.payload as Cobertura
            const id = payloadSelected.id
            return {
                ...state,
                coberturas: state.coberturas.map((e) => {
                    if (e.id === id) {
                        return { ...e, selected: true }
                    } else {
                        return { ...e }
                    }
                }),
            }
        }

        case ActionType.deseleccionarCobertura: {
            const payloadSelected = action.payload as Cobertura
            const id = payloadSelected.id
            return {
                ...state,
                coberturas: state.coberturas.map((e) => {
                    if (e.id === id) {
                        return { ...e, selected: false }
                    } else {
                        return { ...e }
                    }
                }),
            }
        }
        case ActionType.actualizarCoberturasValidas: {
            const coberturas = action.payload as Cobertura[]
            return {
                ...state,
                coberturas: coberturas,
            }
        }

        case ActionType.guardarDatosVehiculo: {
            const vehiculo = action.payload as Vehiculo

            return {
                ...state,
                vehiculo: vehiculo,
            }
        }

        case ActionType.reducirSumaAsegurada:

        case ActionType.aumentarSumaAsegurada: {
            const delta = action.payload as number

            if (!state.vehiculo) {
                return state
            }

            if (
                state.vehiculo.valorAsegurado + delta >
                    state.vehiculo.valorMaxAsegurado ||
                state.vehiculo.valorAsegurado + delta <
                    state.vehiculo.valorMinAsegurado
            ) {
                return state
            }

            return {
                ...state,
                vehiculo: {
                    ...state.vehiculo,
                    valorAsegurado: state.vehiculo.valorAsegurado + delta,
                },
            }
        }
        case ActionType.limpiarDatos: {
            return initialState
        }
    }
    return state
}

type Props = {
    children: React.ReactNode
}

const StoreProvider = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider
