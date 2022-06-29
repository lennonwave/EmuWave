const doorClosed = document.querySelector('.closeddoor')
const doorOpen = document.querySelector('.dooropen')
const buttonEntrar = document.querySelector('.entrar')

buttonEntrar.addEventListener('mouseover', function(){
    doorClosed.style.display='none'
    doorOpen.style.display='inline-block'
})
buttonEntrar.addEventListener('mouseout', function(){
    doorClosed.style.display='inline-block'
    doorOpen.style.display='none'
})