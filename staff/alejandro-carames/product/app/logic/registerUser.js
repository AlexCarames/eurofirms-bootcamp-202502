import { data } from '../data'

/**
 * Removes a post.
 *  @param {string} name The user name.
 * @param {string} email The user e-mail.
 * @param {string} username The user username.
 * @param {string} password The user password.
 */
export const registerUser = (name, email, username, password) => {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 6) throw new Error('invalid name minimo length')
    if (name.length >30) throw new Error('invalid name max  length')

     if (typeof email !== 'string') throw new Error('invalid email type')
    if (email.length < 6) throw new Error('invalid email minimo length')
    if (email.length >30) throw new Error('invalid email  max  length')

     if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 6) throw new Error('invalid username minimo length')
    if (username.length >30) throw new Error('invalid username max  length')

     if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 6) throw new Error('invalid password minimo length')
    if (password.length >30) throw new Error('invalid password max  length')

    return fetch(import.meta.env.VITE_API_URL + '/users/',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, username, password })
    })
        .catch(error => { throw new Error('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body

                    throw new Error(message)
                })
        })
}