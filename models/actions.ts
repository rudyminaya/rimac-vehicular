interface IAction {
    type: ActionType
    payload: any
}

export enum ActionType {
    guardarDatosIniciales,
    guardarDatosDeAPI,
    seleccionarCobertura,
    deseleccionarCobertura,
    actualizarCoberturasValidas,
    aumentarSumaAsegurada,
    reducirSumaAsegurada,
    guardarDatosVehiculo,
    limpiarDatos,
}

export default IAction
