import React, { useState } from 'react'
import styles from './validateForm.module.scss'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import TextComponents from '../textComponents'
import FontFamily from '../../styles/FontFamily'
import Color from '../../styles/Color'
import Boton, { TYPE_BUTTON } from '../boton'

type Inputs = {
    typeDocument: string
    docNum: number
    telf: number
    placa: string
    terms: boolean
}

type Props = {}

const ValidateForm = (props: Props) => {
    const DesktopScreen = useMediaQuery({ query: '(min-width:768px' })

    const [documentType, setDocumentType] = useState<string>('DNI')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onValid: SubmitHandler<Inputs> = (data) => console.log(data)
    const onInvalid: SubmitErrorHandler<Inputs> = (errors) =>
        console.log(errors)

    return (
        <form
            onSubmit={handleSubmit(onValid, onInvalid)}
            className={styles.form}
        >
            <TextComponents
                texto="Déjanos tus datos"
                fontFamily={FontFamily.lato}
                fontSize={DesktopScreen ? 'xxl' : 'xl'}
                color={Color.grayTitle}
            />
            <div className={`${styles.form__field} ${styles.twoFields}`}>
                <div className={styles.form__field__select}>
                    <select
                        {...register('typeDocument')}
                        onChange={(e) => setDocumentType(e.target.value)}
                    >
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
                                    'Es obligatorio que ingrese su número de documento',
                            },
                            maxLength: {
                                value: 8,
                                message:
                                    'El número de documento no puede exceder de 8 dígitos',
                            },
                            pattern: {
                                value: /[0-9]/,
                                message: 'El número de documento es incorrecto',
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
                                    'Es obligatorio que ingrese su número de celular',
                            },
                            maxLength: {
                                value: 10,
                                message:
                                    'El número de celular no debe exceder a más de 10 dígitos',
                            },
                            pattern: {
                                value: /[0-9]/,
                                message: 'El número de celulares incorrecto',
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
                        maxLength={7}
                        placeholder=" "
                        {...register('placa', {
                            required: {
                                value: true,
                                message:
                                    'Es obligatorio que ingrese la placa de rodaje de su vehículo',
                            },
                            maxLength: {
                                value: 7,
                                message:
                                    'El número de celular no debe exceder a más de 7 dígitos',
                            },
                            pattern: {
                                value: /[a-zA-Z0-9]/,
                                message: 'El número de celulares incorrecto',
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
                    {...register('terms')}
                />
                <label
                    htmlFor="terms"
                    className={styles.form__terms__labelCheckBox}
                >
                    Acepto la{' '}
                    <a href="#">Política de Protección de Datos Personales</a> y
                    los <a href="#">Términos y Condiciones.</a>
                </label>
            </div>
            <Boton textButton="Cotízalo" type={TYPE_BUTTON.submit} />
        </form>
    )
}

export default ValidateForm
