const loginUser = (username, password) => {

    if (typeof username !== 'string') throw new Error('Nombre de usuario invalido, prueba otra vez')
    if (username.length < 3) throw new Error('Nombre de usuario demasiado corto')
    if (username.length > 20) throw new Error('Tu nombre de usuario es demasiado largo, prueba con otro mas corto')

    if (typeof password !== 'string') throw new Error('La contraseña es invalida, prueba con otra')
    if (password.length < 8) throw new Error('Tu contraseña es demasiado corta, prueba otra vez')
    if (password.length > 20) throw new Error('Tu contraseña es demasiado larga, te has pasado')

    let user

    for (let i = 0; i < users.length; i++) {

        const _user = users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user === undefined) throw new Error('Tu usuario no existe, igual que tu novia ;)')

    if (user.password !== password) throw new Error('Tus credenciales son erroneas, como tu inteligencia')

}