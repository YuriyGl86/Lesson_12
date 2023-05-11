const form = document.querySelector("form");
const URL = 'https://students.netoservices.ru/nestjs-backend/auth'
const logOutBtn = document.querySelector('#logout__btn')

if(localStorage.getItem('user')) logInToggle(localStorage.getItem('user'))

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch(URL, {
            method: "POST",
            body: formData
        })
        .then(response => {if(response.ok) return response.json()})
        .then(response => {
            if(response.success) {
                localStorage.setItem('user', response.user_id)
                console.log(response.user_id)
                logInToggle(response.user_id)
            }
            else { alert('Неверный логин/пароль') }
            form.reset()
        })
})

function logInToggle(id=1){
    document.querySelector('#signin').classList.toggle('signin_active')
    document.querySelector('#welcome').classList.toggle('welcome_active')
    document.querySelector('#user_id').innerText = id
}


logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('user')
    logInToggle()
} )
