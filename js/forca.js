let tentativa = 7;
let lista = [];
let selecionarPalavrasCategoria;
let palavraSorteada;
//lista de palavras 
let palavras = [    
    palavra1 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra2 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra3 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra4 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra5 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra6 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra7 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra8 = {
        nome: "COREIA DO SUL",
        categoria:"LUGARES"
    },
    palavra9 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra10 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra11 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra12 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra13 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra14 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra15 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra16 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra17 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra18 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra19 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra20 = {
        nome: "FOQUETE",
        categoria:"TRANSPORTE"
    },
    palavra21 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra22 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra23 = {
        nome: "FACA",
        categoria:"OBJETOS"
    },
    palavra24 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra25 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra26 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra27 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra28 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra29 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra30 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra31 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra32 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra33 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra34 = {
        nome: "BOLO",
        categoria:"ALIMENTOS"
    },
    palavra35 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra37 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra38 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra39 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra40 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra40 = {
        nome: "PATO",
        categoria:"ANIMAIS"
    },
    palavra41 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra42 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra43 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra44 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra45 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra46 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra47 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra48 = {
        nome: "MACACO",
        categoria:"ANIMAIS"
    },
    palavra49 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra50 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

//gerar uma palavra
selecionarPalavras();
function selecionarPalavras(){ 
    const SelePalavras = parseInt(Math.random()* palavras.length);
    selecionarPalavrasCategoria = palavras[SelePalavras].categoria;
    palavraSorteada = palavras[SelePalavras].nome;
    
    
    
}

//Mostrar palavra na tela
mostrarPalavras();
function mostrarPalavras(){

    const categoria = document.getElementById("categoria");
    categoria.innerHTML = "";
    categoria.innerHTML = selecionarPalavrasCategoria;

    const palavra = document.getElementById("palavra");
    palavra.innerHTML = "";
    for(i = 0; i <palavraSorteada.length; i++){
        if(lista[i] == undefined){
            lista[i] = "&nbsp;"
            palavra.innerHTML = palavra.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
        }
        else{
            palavra.innerHTML = palavra.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
        }
    }

    
}

//Receber letras
function verificarLetra(letra){

    document.getElementById(letra).disabled = true;
    if(tentativa > 0){
        comparar(letra);
        mudarLetra(letra);
        mostrarPalavras();
        
    }
}
//Destacar letras escolhidas
function mudarLetra(tecla){ 
    
    document.getElementById(tecla).style.background = "#1d1e20";
    document.getElementById(tecla).style.color = "white";
}

//Analisar as letras 
function comparar(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativa--
        carregaImagem();

        if(tentativa == 0){
            alert("OPS!,Não foi dessa vez. A palavra secreta era " + palavraSorteada);
            location.reload();
        

        }
    }
    else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                lista[i] = letra;
            }
        }
    }
    
    let resultado = true;
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != lista[i]){
            resultado = false;
        }
    }

    if(resultado == true)
    {
        alert("PARABÉNS!Você vence. A palavra era " + palavraSorteada);
        location.reload();
        
    }
}
//Atualizando imagem
function carregaImagem(){
    switch(tentativa){
        case 6:
            let img6 = "url('image/forca1.jpg')";
            document.getElementById("imagem").style.background = img6;
            break;
        case 5:
            document.getElementById("imagem").style.background  = "url('image/forca2.jpg')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('image/forca3.jpg')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('image/forca4.jpg')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('image/forca5.jpg')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('image/forca6.jpg')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('image/forca0.jpg')";
           
            break;
    }
}


//Cadastro

//opções da categoria
function selecionarCategoria(){
    const selecionarCat = document.querySelector("palavras").categoria;
    console.log(selecionarCat);
    
}

