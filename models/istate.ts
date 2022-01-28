import Cliente from './cliente'
import Cobertura from './cobertura'
import Vehiculo from './vehiculo'

type IState = {
    coberturas: Cobertura[]
    cliente?: Cliente
    vehiculo?: Vehiculo
}

export default IState
