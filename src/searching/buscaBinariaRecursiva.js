function buscaBinariaRecursiva(tabela, chave, esquerda, direita) {
   
    if(esquerda > direita-1){
        return -1;
    }
    
    let meio = Math.floor(esquerda+direita)/2;

    if(chave===tabela[meio]){
        return tabela[meio];
    }else if(chave < tabela[meio]){

        return buscaBinariaRecursiva(tabela, chave, esquerda, meio-1);

    }else{
        return buscaBinariaRecursiva(tabela, chave, meio+1, direita);
    }
}

function buscaBinaria(chave, v) {
	let esquerda = -1;
	let direita = v.length;

	let itr = 0;

	while (esquerda < direita - 1) {
		console.log("iteração: " + ++itr);

		let meio = Math.floor((esquerda + direita) / 2);
		if (v[meio] < chave) {
			esquerda = meio;
		} else {
			direita = meio;
		}
	}
	return v[direita];
}