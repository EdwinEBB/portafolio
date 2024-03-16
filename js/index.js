const $navar= document.querySelector('.barra');
const $favar= document.querySelectorAll('.fa-brands');
const $solid=document.querySelectorAll('.fa-solid');

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

$solid.forEach(function(solid){
    solid.addEventListener('mouseover',function(){
        solid.classList.add('fa-beat-fade')
    })

    solid.addEventListener('mouseout',function(){
        solid.classList.remove('fa-beat-fade')
    })
})

/*para copiar al portapapeles*/

function copiartext(text=""){
    const textt=document.querySelector(`.${text}`);
    textt.select();
    document.execCommand('copy');
    alert("texto copiado")
}