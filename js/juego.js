let intentos=0
let puntaje=0
const jugar=(name)=>{
    intentos+=1;
    console.log('jugando');
    console.log(intentos)
    if(name=='excadrill'){
            document.getElementById('msjcorrecto').className='visible'
            document.getElementById('img').src='./img/pcolor.jpg';
            
            
            document.getElementById('intentos').innerHTML='intentos: '+intentos
            if(intentos==1){
                puntaje=5
                console.log(puntaje)
                document.getElementById('puntaje').innerHTML='Puntaje: ' + puntaje;
            }else if(intentos==2){
                puntaje=3
                console.log(puntaje)
                document.getElementById('puntaje').innerHTML='Puntaje: ' + puntaje;
                document.getElementById('msjincorrecto').className='oculto';
            }else if(intentos==3){
                puntaje=1
                console.log(puntaje)
                document.getElementById('puntaje').innerHTML='Puntaje' + puntaje;
                document.getElementById('msjincorrecto').className='oculto';
                //reiniciar();
            }
    }else{
        puntaje=0
        document.getElementById('msjincorrecto').className='oculto';
        document.getElementById('msjincorrecto').className='visible';
        document.getElementById('puntaje').innerHTML='Puntaje: ' + puntaje;
        document.getElementById('intentos').innerHTML='intentos: '+intentos
        if(intentos==3){
            
            document.getElementById('puntaje').innerHTML='Puntaje' + puntaje;
            reiniciar();
        }
    }


    
}



const reiniciar=()=>{
    console.log('reiniciar')
    puntaje=0
    intentos=0
    document.getElementById('puntaje').innerHTML='Puntaje: ' + puntaje;
    document.getElementById('intentos').innerHTML='intentos: '+intentos
    document.getElementById('msjcorrecto').className='oculto'
    document.getElementById('msjincorrecto').className='oculto';
    document.getElementById('img').src='./img/pnegro.jpg';
    

}
