export const obtenerNombre = async (): Promise<string> => {
    const id = Math.round(Math.random() * 9) + 1

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((usuario) => usuario.name)
}
