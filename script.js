//Constantes
const botonEncriptar = document.querySelector('#Encriptar');
const botonDesencriptar = document.querySelector('#Desencriptar');
const botonCopiar = document.querySelector('#copy');
const contenedorInicial = document.querySelector('.textosalida');
const textoEncriptar = document.querySelector('#textoencriptado');
const textarea = document.querySelector('#ingresetexto').focus();

//Eventos
botonEncriptar.onclick = validar; 
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarPortapapeles;

//Primer Pantalla
function foco(){
    document.querySelector('#ingresetexto').focus();
}

//Validacion de caracteres especiales y espacios en blanco
function validar(){
    let textarea = document.querySelector('#ingresetexto').value;
    let textoIngreso = textarea;
    
    let vacio = ''; 
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g; 
    let numero =  /[0-9]/g ; 

    if (textarea.match(caracteres)|| textarea.match(mayusculas)){
        alert ('SOLO LETRAS MINUSCULAS Y SIN ACENTOS');
        document.querySelector('#ingresetexto').value='';
        foco();
    } else if (textarea.match(numero)) {
        alert('NO SE PERMITEN NUMEROS');
        document.querySelector('#ingresetexto').value='';
        foco();
    } else if (textarea == vacio) {
        alert('INGRESE UN MENSAJE PARA ENCRIPTAR');
        document.querySelector('#ingresetexto').value='';
        foco();
    } else{
        ocultar();
        textoEncriptar.textContent = encriptar(textoIngreso);        
    }
}

function ocultar(){
    contenedorInicial.classList.add('ocultar');
}


function encriptar(texto){
    let textoInicial = texto;
    let textoFinal = '';

    alert('Texto ingresado / '+ textoInicial );
    
    

    for(let i = 0 ; i < textoInicial.length; i++){
        if(textoInicial[i] == 'e'){
            textoFinal = textoFinal + 'enter';
        }else if(textoInicial[i] == 'i'){
            textoFinal = textoFinal + 'imes';
        }else if(textoInicial[i] == 'a'){
            textoFinal = textoFinal + 'ai';
        }else if(textoInicial[i] == 'o'){
            textoFinal = textoFinal + 'ober';
        }else if(textoInicial[i] == 'u'){
            textoFinal = textoFinal + 'ufat';
        } else{
            textoFinal = textoFinal + textoInicial[i];
        }
    }
    
    return textoFinal;
}


function desencriptar(){

    let textarea = document.querySelector('#ingresetexto').value;
    let textoIngreso = textarea;

    ocultar();
    textoEncriptar.textContent = desencriptarTexto(textoIngreso); 
    
    
}

function desencriptarTexto(texto){

    let textoInicial = texto;
    let textoFinal = '';

    let remplazar = textoInicial
                        .replaceAll('enter','e')
                        .replaceAll('imes','i')
                        .replaceAll('ai','a')
                        .replaceAll('ober','o')
                        .replaceAll('ufat','u')

    return remplazar;

}

function copiarPortapapeles(texto){
    let copiado = document.getElementById('#textoEncriptado');
    document.execCommand('copy');
    document.querySelector('#ingresetexto').value='';
    foco(contenedorInicial);
    alert('Texto Copiado  ->  Pega con CTRL V')
}
