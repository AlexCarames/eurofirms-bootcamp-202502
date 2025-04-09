var body = document.querySelector('body')

function buildLandingView() {
    var landingView = document.createElement('div')

    var logoHeading = document.createElement('h1')
    logoHeading.classList.add('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    landingView.appendChild(logoHeading)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    landingView.appendChild(registerLink)

    registerLink.addEventListener('click', function (event) {
        body.removeChild(landingView)
        body.appendChild(registerView)
    })


    var orText = document.createTextNode('or')
    landingView.appendChild(orText)

    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    landingView.appendChild(loginLink)

    loginLink.addEventListener('click', function(event){
        body.removeChild(landingView)
        body.appendChild(loginView)
    })


    return landingView



}

function buildRegisterView() {

    //logo
    var registerView = document.createElement('div')
    registerView.classList.add('flex', 'flex-col', 'align-center')

    var logoHeading = document.createElement('h1')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    registerView.appendChild(logoHeading)

    var registerForm = document.createElement('form')
    registerForm.classList.add('flex', 'flex-col', 'gap-1', 'w-250px')


    //Nombre
    var nameField = document.createElement('div')
    nameField.classList.add('flex', 'flex-col')
    var nameLabel = document.createElement('label')
    nameLabel.htmlFor = 'name'
    var nameText = document.createTextNode('Name ')
    nameLabel.appendChild(nameText)
    var nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameField.appendChild(nameLabel)
    nameField.appendChild(nameInput)
    registerForm.appendChild(nameField)
    // TODO finish register view
    registerView.appendChild(registerForm)


    //username

    var usernameField = document.createElement('div')
    usernameField.classList.add('flex', 'flex-col')
    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username ')
    usernameLabel.appendChild(usernameText)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    usernameInput.name = 'username'
    usernameField.appendChild(usernameLabel)
    usernameField.appendChild(usernameInput)
    registerForm.appendChild(usernameField)

    //email
    var emailField = document.createElement('div')
    emailField.classList.add('flex', 'flex-col')
    var emailLabel = document.createElement('label')
    emailLabel.htmlFor = 'email'
    var emailText = document.createTextNode('Email ')
    emailLabel.appendChild(emailText)
    var emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.name = 'email'
    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)
    registerForm.appendChild(emailField)

    //Contraseña
    var passwordField = document.createElement('div')
    passwordField.classList.add('flex', 'flex-col')
    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'Password'
    var passwordText = document.createTextNode('Password ')
    passwordLabel.appendChild(passwordText)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'Password'
    passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    registerForm.appendChild(passwordField)


    var buttons = document.createElement('div')
    buttons.classList.add('flex', 'justify-between', 'm-t-20px', 'w-250px')


    //Link a login
    var loginLink = document.createElement('a')
    loginLink.href = '#'
    var loginText = document.createTextNode('Login')
    loginLink.appendChild(loginText)
    buttons.appendChild(loginLink)

    loginLink.addEventListener('click', function (event) {
        body.removeChild(registerView)
        body.appendChild(loginView)
    })


    //Boton de registro
    var buttonRegister = document.createElement('button')
    buttonRegister.classList.add('button')
    buttonRegister.classList.add('button-primary')
    buttonRegister.type = 'submit'
    var buttonText = document.createTextNode('Register')
    buttonRegister.appendChild(buttonText)
    buttons.appendChild(buttonRegister)


    //registro de usuario
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const name = nameInput.value
        const username = usernameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, username, password)
            body.removeChild(registerView)
            body.appendChild(loginView)
        } catch (estasJodido) {
            alert("Estas jodido: pollito " + estasJodido.message)
        }
    })


    registerForm.appendChild(buttons)

    return registerView
}

function buildLoginView() {
    // TODO implement me
    var loginView = document.createElement('div')

    var logoHeading = document.createElement('i')
    var logoText = document.createTextNode('Logo')
    logoHeading.appendChild(logoText)
    loginView.appendChild(logoHeading)

    var loginTitle = document.createElement('h1')
    var loginText = document.createTextNode('Login Title')
    loginTitle.appendChild(loginText)
    loginView.appendChild(loginTitle)

    var loginForm = document.createElement('form')
    //loginForm.classList.add('flex', 'flex-col', 'gap-20px')
    loginView.appendChild(loginForm)

    var usernameField = document.createElement('div')
    loginForm.appendChild(usernameField)

    var usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    var usernameText = document.createTextNode('Username ')
    usernameLabel.appendChild(usernameText)
    usernameField.appendChild(usernameLabel)
    var usernameInput = document.createElement('input')
    usernameInput.type = 'text'
    //usernameInput.id= 'username'
    usernameInput.name = 'username'
    //usernameInput.placeholder= 'your username'
    usernameField.appendChild(usernameInput)
    //loginForm.appendChild(usernameField)


    var passwordField = document.createElement('div')
    loginForm.appendChild(passwordField)
    //passwordField.classList.add('flex', 'flex-col')

    var passwordLabel = document.createElement('label')
    passwordLabel.htmlFor = 'Password'
    var passwordText = document.createTextNode('Password ')
    passwordLabel.appendChild(passwordText)
    passwordField.appendChild(passwordLabel)
    var passwordInput = document.createElement('input')
    passwordInput.type = 'text'
    passwordInput.name = 'Password'
    //passwordField.appendChild(passwordLabel)
    passwordField.appendChild(passwordInput)
    //registerform.appendChild(passwordField)



    var buttonAndLink = document.createElement('div')
    var buttonLogin = document.createElement('button')
    buttonLogin.classList.add('button')
    buttonLogin.type = 'submit'
    var buttonText = document.createTextNode('Login')
    buttonLogin.appendChild(buttonText)
    buttonAndLink.appendChild(buttonLogin)
    loginForm.appendChild(buttonAndLink)

    var registerLink = document.createElement('a')
    registerLink.href = '#'
    var registerText = document.createTextNode('Register')
    registerLink.appendChild(registerText)
    buttonAndLink.appendChild(registerLink)


    //link de registro
    registerLink.addEventListener('click', function (event) {
        body.removeChild(loginView)
        body.appendChild(registerView)
    })


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            loginUser(username, password)
            loginForm.reset()

            body.removeChild(loginView)
            body.appendChild(homeView)

        } catch (error) {
            alert(error.message)
        }

    })


    //loginView.appendChild(loginForm)

    return loginView

}


// function buildHomeView(){}
// const buildHomeView = function ()
const buldingHomeView = () => {

    const homeView = document.createElement('div')
    //homeView.classList.add('flex', 'flex-col', 'align-center')


    const logo = document.createElement('i')
    const logoText = document.createTextNode('Logo')
    logo.appendChild(logoText)
    homeView.appendChild(logo)

    const homeTitle = document.createElement('h1')
    const homeText = document.createTextNode('Home Mundanos!!')
    homeTitle.appendChild(homeText)
    homeView.appendChild(homeTitle)

    const logoutButton = document.createElement('button')
    logoutButton.classList.add('black-button')
    const logoutText = document.createTextNode('Logout')
    logoutButton.appendChild(logoutText)
    homeView.appendChild(logoutButton)



    logoutButton.addEventListener('click', function (event) {
        body.removeChild(homeView)
        body.appendChild(landingView)
    })

    return homeView


}

var landingView = buildLandingView()
body.appendChild(landingView)


var registerView = buildRegisterView()
//body.appendChild(registerView)


var loginView = buildLoginView()
//body.appendChild(loginView)


var homeView = buldingHomeView()
//body.appendChild(homeView)




// TODO test login view
// TODO test home view