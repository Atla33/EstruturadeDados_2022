class Registro {
	constructor(chave, dado) {
		this.chave = chave;
		this.dado = dado;
	}
}

class TabelaHash {
	constructor() {
		this.tabela = [];
		this.size = 20;
	}

	funcaoHash(palavra) {
		let soma = 0;
		for (let x = 0; x < palavra.length; x++) {
			soma += palavra.charCodeAt(x) * 31;
		}
		console.log("soma = " + soma);
		return soma % 20;
	}

	add(chave, dado) {
		let novo = new Registro(chave, dado);
		let indiceHash = this.funcaoHash(chave);
		console.log("indiceHash=" + indiceHash);

		//move ateh encontrar um registro nao inicializado (undefined) ou vazio (null)
		while (
			this.tabela[indiceHash] != null ||
			this.tabela[indiceHash] != undefined
		) {
			if (chave === this.tabela[indiceHash].chave) {
				//se encontrar a mesma chave faz a substituicao
				break;
			}

			//proximo registro
			indiceHash++;
			//volta para o inicio da tabela
			indiceHash %= size;
		}

		this.tabela[indiceHash] = novo;
		console.log(this.tabela);
	}

	remove(chave) {
		//obtem o valor de hash
		let indiceHash = this.funcaoHash(chave);

		//move ateh encontrar um registro nao inicializado (undefined) ou vazio (null)
		while (
			this.tabela[indiceHash] != null ||
			this.tabela[indiceHash] != undefined
		) {
			if (this.tabela[indiceHash].chave === chave) {
				//atribui um registro vazio (null) no lugar do item a ser removido
				this.tabela[indiceHash] = null;
				console.log(this.tabela);
				return true;
			}
			//proximo registro
			indiceHash++;
			//volta para o inicio da tabela
			indiceHash %= size;
		}
		console.log(this.tabela);
		return false;
	}

	get(chave) {
		let indiceHash = this.funcaoHash(chave);

		while (
			this.tabela[indiceHash] ||
			this.tabela[indiceHash] != undefined
		) {
			if (this.tabela[indiceHash].chave === chave) {
				return this.tabela[indiceHash].dado;
			}
			//proximo registro
			indiceHash++;
			//volta para o inicio da tabela
			indiceHash %= size;
		}

		return undefined;
	}
}