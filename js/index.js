const $navar= document.querySelector('.barra');
const $favar= document.querySelectorAll('.fa-brands');
const $ms=document.querySelector('.fa-database');
/*par la barra*/
window.addEventListener('scroll',function(){
    $navar.classList.toggle('activado',this.window.scrollY>0)
})

/*para animación de los iconos*/
$favar.forEach(function(favar){
    favar.addEventListener('mouseover',function(){
        favar.classList.add('fa-beat-fade')
    })

    favar.addEventListener('mouseout',function(){
        favar.classList.remove('fa-beat-fade')
    })
})

$ms.addEventListener('mouseover',function(){
    $ms.classList.add('fa-beat-fade')
})

$ms.addEventListener('mouseout',function(){
    $ms.classList.remove('fa-beat-fade')
})