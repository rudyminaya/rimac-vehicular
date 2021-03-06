import React, { useContext, useEffect, useState } from 'react'
import styles from './validateForm.module.scss'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import TextComponents from '../textComponents'
import FontFamily from '../../styles/FontFamily'
import Color from '../../styles/Color'
import Boton, { TYPE_BUTTON } from '../boton'
import { Store } from '../../context/Store'
import {
    datosIniciales,
    guardarDatosVehiculo,
} from '../../utils/actionGenerator'
import { getUserInfo } from '../../controllers/user'
import { getVehiculo } from '../../controllers/vehiculo'
import { useRouter } from 'next/router'

type Inputs = {
    typeDocument: string
    docNum: number
    telf: number
    placa: string
    terms: boolean
}

const ValidateForm = () => {
    const [errores, setErrores] = useState<string[]>([])
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })
    const { state, dispatch } = useContext(Store)
    const { register, handleSubmit } = useForm<Inputs>()

    const router = useRouter()

    const onValid: SubmitHandler<Inputs> = async (data) => {
        const userInfo = await getUserInfo()
        const action = datosIniciales(
            data.typeDocument,
            data.docNum,
            data.telf,
            data.placa,
            userInfo.name,
            userInfo.email
        )
        dispatch(action)
    }

    useEffect(() => {
        const obtenerData = async () => {
            const vehiculo = await getVehiculo()
            const action = guardarDatosVehiculo(
                vehiculo.valorAsegurado,
                vehiculo.valorMinAsegurado,
                vehiculo.valorMaxAsegurado,
                vehiculo.marca,
                vehiculo.modelo,
                vehiculo.anio
            )

            dispatch(action)
            router.push('/arma-tu-plan')
        }
        if (state.cliente) {
            obtenerData()
        }
    }, [state.cliente])

    const onInvalid: SubmitErrorHandler<Inputs> = (errors) => {
        setErrores(
            Object.values(errors)
                .map((e) => e.message || '')
                .filter((v) => v != '')
        )
    }

    return (
        <form
            onSubmit={handleSubmit(onValid, onInvalid)}
            className={styles.form}
        >
            <TextComponents
                texto="D??janos tus datos"
                fontFamily={FontFamily.lato}
                fontSize={DesktopScreen ? 'xxl' : 'xl'}
                color={Color.grayTitle}
            />
            {errores && (
                <ul className={styles.form__errors}>
                    {errores.map((e: string, i) => {
                        return (
                            <li
                                key={`error-${i}`}
                                className={styles.form__errors__message}
                            >
                                {e}
                            </li>
                        )
                    })}
                </ul>
            )}
            <div className={`${styles.form__field} ${styles.twoFields}`}>
                <div className={styles.form__field__select}>
                    <select {...register('typeDocument')}>
                        <option value="dni">DNI</option>
                        <option value="ce">CE</option>
                    </select>
                </div>
                <div className={styles.form__box}>
                    <input
                        className={styles.form__box__input}
                        type="tel"
                        placeholder=" "
                        maxLength={8}
                        {...register('docNum', {
                            required: {
                                value: true,
                                message:
                                    'Es obligatorio que ingrese su n??mero de documento',
                            },
                            maxLength: {
                                value: 8,
                                message:
                                    'El n??mero de documento no puede exceder de 8 d??gitos',
                            },
                            pattern: {
                                value: /[0-9]/,
                                message: 'El n??mero de documento es incorrecto',
                            },
                        })}
                    />
                    <label className={styles.form__box__label} htmlFor="docNum">
                        Nro. de documento
                    </label>
                </div>
            </div>
            <div className={styles.form__field}>
                <div className={styles.form__box}>
                    <input
                        className={styles.form__box__input}
                        type="tel"
                        maxLength={10}
                        placeholder=" "
                        {...register('telf', {
                            required: {
                                value: true,
                                message:
                                    'Es obligatorio que ingrese su n??mero de celular',
                            },
                            maxLength: {
                                value: 10,
                                message:
                                    'El n??mero de celular no debe exceder a m??s de 10 d??gitos',
                            },
                            pattern: {
                                value: /[0-9]/,
                                message: 'El n??mero de celulares incorrecto',
                            },
                        })}
                    />
                    <label className={styles.form__box__label} htmlFor="telf">
                        Celular
                    </label>
                </div>
            </div>
            <div className={styles.form__field}>
                <div className={styles.form__box}>
                    <input
                        className={styles.form__box__input}
                        type="text"
                        minLength={6}
                        maxLength={6}
                        placeholder=" "
                        {...register('placa', {
                            required: {
                                value: true,
                                message:
                                    'Es obligatorio que ingrese la placa de rodaje de su veh??culo',
                            },
                            maxLength: {
                                value: 6,
                                message:
                                    'El n??mero de placa no debe exceder a m??s de 6 d??gitos',
                            },
                            minLength: {
                                value: 6,
                                message:
                                    'El n??mero de placa debe ser de 6 d??gitos',
                            },
                            pattern: {
                                value: /[a-zA-Z0-9]/,
                                message: 'El n??mero de placa es incorrecto',
                            },
                        })}
                    />
                    <label className={styles.form__box__label} htmlFor="telf">
                        Placa
                    </label>
                </div>
            </div>
            <div className={styles.form__terms}>
                <input
                    type="checkbox"
                    id="terms"
                    className={styles.form__terms__checkbox}
                    {...register('terms', {
                        required: {
                            value: true,
                            message: 'Debe aceptar los T??rminos y Condiciones',
                        },
                    })}
                />
                <label
                    htmlFor="terms"
                    className={styles.form__terms__labelCheckBox}
                >
                    Acepto la{' '}
                    <a href="#">Pol??tica de Protecci??n de Datos Personales</a> y
                    los <a href="#">T??rminos y Condiciones.</a>
                </label>
            </div>
            <Boton textButton="Cot??zalo" type={TYPE_BUTTON.submit} />
        </form>
    )
}

export default ValidateForm
