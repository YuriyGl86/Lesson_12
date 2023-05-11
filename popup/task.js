showModal()

const close = document.querySelector('.modal__close')

close.addEventListener('click', closeHandler)


function closeHandler(event){
    event.target.closest('.modal').classList.remove('modal_active')
}


function showModal(){
    const modal = document.querySelector('.modal')
    if(!getCookie('check')){
        modal.classList.add('modal_active')
        setCookie('check', '11')
    }
   
}

function getCookie(name){
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))
    if(!cookie) return
    return cookie.substr(name.length + 1)
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}