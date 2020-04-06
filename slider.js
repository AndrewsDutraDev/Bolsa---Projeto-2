function preload(){
    imgs = Array("Imagens/fotos1.jpg","Imagens/fotos2.jpg","Imagens/fotos3.jpg","Imagens/fotos4.jpg","Imagens/fotos5.jpg","Imagens/fotos6.jpg");
    imgQtde = imgs.length;
    for (i=0;i<imgQtde;i++){
        var preloading = new Image();
        preloading.src = imgs[i];
    }
}
function start(){
    preload();
    max = 6;
    min = 1;
    fotoindice = min;
    transicao = true;
    carregaFoto("Imagens/fotos1.jpg");
    document.getElementById("galeria").addEventListener("transitionend",fimTransicao);
    timer = setInterval(trocaFoto,3000);
}

function trocaFoto(){
    transicao = false;
    fotoindice++;
    if (fotoindice > max){    
        fotoindice = min
    }
    carregaFoto("Imagens/fotos"+fotoindice+".jpg")
    
}
function fimTransicao(){
    transicao = true;
}
function carregaFoto(picture){
    document.getElementById("galeria").style.backgroundImage="URL("+picture+")";
}

function proxima(){
    clearInterval(timer);
    if (transicao){
        transicao = false;
        fotoindice++;
        if (fotoindice > max){    
            fotoindice = min
        }
        carregaFoto("Imagens/fotos"+fotoindice+".jpg")
    }
    timer =setInterval(trocaFoto,3000)
}
function anterior(){
    clearInterval(timer);
    if (transicao){
        transicao = false;
        fotoindice--;
        if (fotoindice < min ){    
            fotoindice = max
        }
        carregaFoto("Imagens/fotos"+fotoindice+".jpg")
    }
    timer =setInterval(trocaFoto,3000)
}