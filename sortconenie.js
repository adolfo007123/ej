function ordenar(lista){
    var n, i, k, aux;
    n = lista.length;
    console.log(lista[0]);
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            console.log("pal1: "+lista[i]+" ,pal2: "+lista[i+1]);
            console.log(mayorPal1(lista[i],lista[i + 1]));
            if (!mayorPal1(lista[i],lista[i + 1])) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    return lista;
}
var lista = new Array("zzzz","oooo","aaaa","nnnn","ñññ", "ibañez", "ibarra")
console.log("lista ordenada: ");
console.log(lista);
console.log(ordenar(lista))

function mayorPal1 (pal1, pal2){
    var alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ,"ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
    var primero = false;
    var comprobar = true;
    for (let i = 0; i < pal1.length; i++) {
        var pos1=-2;
        var pos2=-1;
        var aux1 = pal1.substring(i,i+1);
        var aux2 = pal2.substring(i,i+1);
    
        if(aux1!=aux2){
            for (let j = 0; j < alf.length; j++) {
                if(alf[j]==aux1){
                    pos1=j;
                }
                if(alf[j]==aux2){
                    pos2=j;
                }
            }
            comprobar=false;
            if(pos1<pos2){
                primero=true;
            }
            
        }
        if(!comprobar)break;
    }

    return primero;
}
document.write(mayorPal1("maoana","mañana"));