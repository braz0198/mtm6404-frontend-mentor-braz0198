const $container = document.querySelector('.container')
const $openMenu = document.querySelector('.hamburger-icon')
const $closeMenu = document.querySelector('.cross-icon')
const $nav = document.querySelector('nav')

$openMenu.addEventListener('click', function ShowMenu(){
    $nav.classList.toggle('hide')
    $closeMenu.classList.toggle('hide')
    $openMenu.classList.toggle('hide')
})

$closeMenu.addEventListener('click', function CloseMenu(){
    $nav.classList.toggle('hide')
    $openMenu.classList.toggle('hide')
    $closeMenu.classList.toggle('hide')
} )





    



