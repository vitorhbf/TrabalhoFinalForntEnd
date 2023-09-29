
let btn = document.querySelector('.eye-btn')

let nameUser = document.querySelector('#user-name')
let labelNameUser = document.querySelector('#user')
let validNameUser = false



let pass = document.querySelector('#user-password')
let labelPass = document.querySelector('#password')
let validPass = false

let msgmError = document.querySelector('#msgm-error')

let msgmSucess = document.querySelector('#msgm-sucess')



/*login*/

nameUser.addEventListener('keyup', () => {
    if (nameUser.value.length <= 2) {
        labelNameUser.setAttribute('style', 'color: red')
        labelNameUser.innerHTML = 'Nome - É necessário inserir no mínimo 3 caracteres!'
        nameUser.setAttribute('style', 'color: red')
        validNameUser = false

    } else {
        labelNameUser.setAttribute('style', 'color: green')
        labelNameUser.innerHTML = 'Usuário:'
        nameUser.setAttribute('style', 'color: white')
        validNameUser = true
    }
})
pass.addEventListener('keyup', () => {
    if (pass.value.length <= 5) {
        labelPass.setAttribute('style', 'color: red')
        labelPass.innerHTML = 'Senha - deve conter no mínimo 6 caracteres !'
        pass.setAttribute('style', 'color: red')
        validPass = false

    } else {
        labelPass.setAttribute('style', 'color: green')
        labelPass.innerHTML = 'Senha:'
        pass.setAttribute('style', 'color: white')
        validPass = true
    }
})





