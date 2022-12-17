// сцена превью (подключение)
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//заполнение шкалы прогресса
let skillFull = document.querySelectorAll('.skills__progress-full')
let skillZero = document.querySelectorAll('.skills__progress-zero')
for(let i = 0; i<skillFull.length; i++){
 skillFull[i].style.width = skillZero[i].getAttribute('data-progress')
}

// убирающийся хедер (подключение)
let header = document.querySelector('.fixed-header')
let headroom = new Headroom(header)
headroom.init() 

//Определение высоты экрана 
let screenHeight = 0
window.addEventListener('load', () => {
 screenHeight = document.documentElement.clientHeight
})

//изменение цвета навигации 
let navList = document.querySelectorAll('.list-item')
let firstSection = document.querySelector('.preview')
window.addEventListener('scroll', () => {
 let changeTrigger = screenHeight*0.7
 if (firstSection.getBoundingClientRect().top > -changeTrigger){
  navList[0].classList.add('active')
  navList[1].classList.remove('active')
  navList[2].classList.remove('active')
  navList[3].classList.remove('active')
  navList[4].classList.remove('active')
 }
 if (firstSection.getBoundingClientRect().top < -changeTrigger && firstSection.getBoundingClientRect().top > -changeTrigger*3.5) {
  navList[1].classList.add('active')
  navList[0].classList.remove('active')
  navList[2].classList.remove('active')
  navList[3].classList.remove('active')
  navList[4].classList.remove('active')
 }
 if (firstSection.getBoundingClientRect().top < -changeTrigger * 3.5 && firstSection.getBoundingClientRect().top > -changeTrigger*8) {
  navList[2].classList.add('active')
  navList[0].classList.remove('active')
  navList[1].classList.remove('active')
  navList[3].classList.remove('active')
  navList[4].classList.remove('active')
 }
 if (firstSection.getBoundingClientRect().top < -changeTrigger * 8 && firstSection.getBoundingClientRect().top > -changeTrigger*9) {
  navList[3].classList.add('active')
  navList[0].classList.remove('active')
  navList[1].classList.remove('active')
  navList[2].classList.remove('active')
  navList[4].classList.remove('active')
 }
 if (firstSection.getBoundingClientRect().top < -changeTrigger * 9.3) {
  navList[4].classList.add('active')
  navList[0].classList.remove('active')
  navList[1].classList.remove('active')
  navList[2].classList.remove('active')
  navList[3].classList.remove('active')
 }
})

//экран загрузки (убирается, когда страница прогружена)
let loader = document.querySelector('.loader')
let loading = document.querySelector('.loading')

window.addEventListener('load', () => {
 loader.classList.add('load')
})


//Подключение анимации от прокрутки
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$('[data-animation-start]').scrollAnimations({ //новый дата атрибут меняет триггер срабатывания анимации
 offset: 0.1
});

$('[data-animation-bottom]').scrollAnimations({ //новый дата атрибут меняет триггер срабатывания анимации
 offset: 0.8
});
$containers.scrollAnimations();