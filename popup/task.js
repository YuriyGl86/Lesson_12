setTimeout(showModal,1000)

const close = document.querySelector('.modal__close')

close.addEventListener('click', closeHandler)


function closeHandler(event){
    event.target.closest('.modal').classList.remove('modal_active')
}


function showModal(){
    const modal = document.querySelector('.modal')
    if(!localStorage.getItem('check')){
        modal.classList.add('modal_active')
        localStorage.setItem('check', '1')
    }
   
}

