let imagen=document.querySelector("#img0")
let verificar = document.querySelector('#verificar')
let autenticar=document.querySelector('#autenticar')

console.log (imagen)
imagen.addEventListener('click', function(){
    imagen.classList.toggle('con-borde')
})

verificar.addEventListener('click', function(){
    const cant1=document.querySelector('#txt1').value;
    const cant2=document.querySelector('#txt2').value;
    const cant3=document.querySelector('#txt3').value;
    const total = +cant1 + +cant2 + +cant3;
    console.log(total)
    if (total <=10){
        document.querySelector('#resultado').innerHTML= `llevas ${total} pasteles`
    
    }else{
        document.querySelector('#resultado').innerHTML= "llevas demasiados pasteles"
    
    }
})

autenticar.addEventListener('click', function(){
    const nro1=document.querySelector('#uno').value;
    const nro2=document.querySelector('#dos').value;
    const nro3=document.querySelector('#tres').value;
    if (nro1==9 && nro2==1 && nro3==1){
        document.querySelector('#lblresult').innerHTML= "password 1 correcto"
    
    }else if(nro1==7 && nro2==1 && nro3==4){
        document.querySelector('#lblresult').innerHTML= "password 2 correcto"
    
    }else{
        document.querySelector('#lblresult').innerHTML= "password incorrecto"
    }
})

