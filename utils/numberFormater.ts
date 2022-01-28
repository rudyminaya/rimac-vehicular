export const formatoMiles = (numero: number): string => {
    const numeroFormateado = new Intl.NumberFormat('es-PE', {}).format(numero)

    return numeroFormateado
}
export const formatoDecimales = (numero: number): string => {
    const numeroFormateado = new Intl.NumberFormat('es-PE', {
        minimumFractionDigits: 2,
    }).format(numero)

    return numeroFormateado
}
