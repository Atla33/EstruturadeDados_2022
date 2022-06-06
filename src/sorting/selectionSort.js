function selectionSort(dados) {

    let i, j, indiceMenor;

    for (i=0; i< dados.length; i++) {
        indiceMenor = i;
        
        for (j=i; j< dados.length; j++) {
            if (dados[indiceMenor] > dados[j]) {
                indiceMenor = j;
            }
            
        }
        if (i != indiceMenor) {
            //[dados[i], dados[indiceMenor] = dados[indiceMenor], dados[i]];
            let aux = dados[i];
            dados[i] = dados[indiceMenor];
            dados[indiceMenor] = aux;
        }
    }
    
    return dados;
}

export default selectionSort;