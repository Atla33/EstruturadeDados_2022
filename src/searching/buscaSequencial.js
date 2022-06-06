function buscaSequencial(dados, chave) {

    var tam = dados.length;
    dados[tam] = chave;
    let i;

    for (i = 0; chave != dados[i]; i++) {}
        
    if (/*chave === dados[i] &&*/ i != tam) {
            return dados[i];
    };
    
    return -1
}

export default buscaSequencial;