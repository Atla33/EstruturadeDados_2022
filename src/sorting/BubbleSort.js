function bubbleSort(dadosNaoOrdenados){
    let i = 0;
    let j = 0;

    for(i; i <= dadosNaoOrdenados.length; i++){
        for(j; j < dadosNaoOrdenados.length-1-i; j++){
            if(dadosNaoOrdenados[j] > dadosNaoOrdenados[j+1]){
                let aux = dadosNaoOrdenados[j];
                dadosNaoOrdenados[j] = dadosNaoOrdenados[j+1];
                dadosNaoOrdenados[j+1] = aux;
            }
        }
    }

    return dadosNaoOrdenados;
}

export default bubbleSort;