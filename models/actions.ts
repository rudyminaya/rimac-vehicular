interface IAction {
    type: ActionType
    payload: any
}

export enum ActionType {
    guardarDatosIniciales,
    seleccionarCobertura,
    deseleccionarCobertura,
    actualizarCoberturasValidas,
    aumentarSumaAsegurada,
    reducirSumaAsegurada,
    guardarDatosVehiculo,
    guardarPrima,
    limpiarDatos,
}

export default IAction
