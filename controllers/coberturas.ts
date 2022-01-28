import { protegeTuAuto } from '../data/protegeTuAuto'
import Cobertura from '../models/cobertura'

export const coberturasValidas = (
    montoAsegurado: number,
    coberturasActuales: Cobertura[]
) => {
    const data = protegeTuAuto.map((e) => {
        const coberturaActual = coberturasActuales.find((v) => v.id === e.id)

        if (coberturaActual) {
            return coberturaActual
        } else {
            return e
        }
    })
    //el id de Choque y/o pasarte la luz roja es 1
    if (montoAsegurado > 16000) {
        return data.filter((v) => v.id !== 1)
    } else {
        return data
    }
}
