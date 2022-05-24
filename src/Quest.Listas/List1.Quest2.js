class Questao2{

    constructor(size = 7){
        this.topo = 1
        this.dados = []
        this.maxSize = size 
    }

    // 

    push(dado) {

        if(!this.isFull()){

            this.dado[this.topo] = dado
            this.topo ++
        } else {
            throw new Error("stack overflow")
        }
        
    }

    // Retirar do topo da pilha
    pop() {

        if(!this.isEmpty()){
            this.topo --
        } else {
            throw new Error("stack underflow")
        }
   
    }

    // Verifica o topo
    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo-1]
        }
    }

    // Verifica se está cheio
    isFull() {
        return this.length() === this.maxSize;
    }

    // Verificar se está vazio
    isEmpty() {

        return this.length() === 1;
        
    }

    //tamanho
    length() {

        return this.topo;
      
    }

    toString() {

    }
}

export default Pilha;