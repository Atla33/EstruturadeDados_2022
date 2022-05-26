function buscaBinaria(chave, tabela) {

    let esquerda = -1;
    let direita = tabela.length;

    while (esquerda < direita) {

        let meio = Math.floor(esquerda=direita)/2;
        if (tabela[meio] < chave) {

            esquerda = meio;
            
        }else{
            direita = meio;
        }
        
    }
    return tabela[direita]
}

export default buscaBinaria;