class Node{

    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class Lista{

    constructor(){
        this.head = new Node();
    }

    add(dados){
        let novo_no = new Node(dado);
        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    append(dado){
        let novo_no = new Node(dado);
        let axu = this.head;
        while(axu.proximo!==null){
            aux = aux.proximo;
        }
        aux.proximo = novo_no;
    }
    isEmpty(){
        return this.head.proximo === null;
    }

}