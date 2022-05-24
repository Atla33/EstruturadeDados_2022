function mergeSort(dados) {

if (dados.length === 1){
    return dados;
}

const mid = Math.floor(dados.length/2);

const esquerda = dados.slice(0, mid);
const direita = dados.slice(mid, dados.length);

return merge(mergeSort(esquerda), mergeSort(direita));

}

function merge(esquerda, direita){

    let resultdados = [], il = 0, ir = 0;

   
    while (il < esquerda.length && ir < direita.length) {
      if (esquerda[il] < direita[ir]) {
        resultdados.push(esquerda[il]);
        il++; 
      } else {
        resultdados.push(direita[ir]);
        ir++; 
      }
    }

    while (il < esquerda.length) {
        resultdados.push(esquerda[il])
        il++
    }

    while (ir < direita.length) {
        resultdados.push(direita[ir])
        ir++
    }

    return resultdados;
}

export default mergeSort;

