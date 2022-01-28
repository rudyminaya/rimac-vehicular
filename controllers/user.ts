type UserInfo = {
    name: string
    email: string
}

export const getUserInfo = async (): Promise<UserInfo> => {
    const id = Math.round(Math.random() * 9) + 1

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((usuario) => ({
            name: usuario.name,
            email: usuario.email,
        }))
}
