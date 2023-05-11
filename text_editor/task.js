const editor = document.querySelector('#editor')

window.addEventListener('beforeunload', save)
window.addEventListener('load', load)

function save(){
    localStorage.setItem('editor', editor.value)
}

function load(){
    editor.value = localStorage.getItem('editor') || ''
}

document.querySelector('#button').addEventListener('click', () => editor.value = '')