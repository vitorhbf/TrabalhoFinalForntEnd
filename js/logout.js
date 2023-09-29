let homeHref2 = document.getElementById('sair')
let homeHref = document.getElementById('home')


labelNameUser.setAttribute('style', 'color: red')

let userLogged = JSON.parse(localStorage.getItem('userLogged'))

let logged = document.querySelector('#logged')

logged.innerHTML = `Seja bem vindo, ${userLogged.nomeValid}!`
function logout() {

    localStorage.removeItem('token')

    localStorage.removeItem('userLogged')
    alert('Tem certeza que deseja sair?')
    window.location.href = 'http://localhost:5500/login.html'


}
function blockHome() {
    if (localStorage.getItem('token') == null) {
        alert('Você precisa estar logado para acessar o conteúdo desta pagina')
        window.location.href = 'http://localhost:5500/login.html'

    } else {
        window.location.href = "http://localhost:5500/indexHome.html"
    }
}


