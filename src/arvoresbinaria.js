class Node{

    constructor(dado){
        this.dado = dado;
        this.direita = null;
        this.esquerda = null;
    }

}

class avlbinaria{

    constructor(){
        raiz = null;
    }

    isRoot() {
        if(this.raiz.direita === null && this.root.esquerda === null) return true;
        return false;
    }

    add(dado){

        if(this.raiz === null){
            let novonode = new Node(dado);
            this.raiz = novonode;
        }else{

            this.insertNode(this.raiz.dado)

        }
    }
    insertNode(raiz, dado){

        if(raiz.dado < dado){
            if(raiz.esquerda === null){
                let novonode = new Node(dado);
                raiz.esquerda = novonode;
            }else{ 
                this.insertNode(raiz.esquerda, dado)
            }

        }else{
            if (raiz.direita === null) {
                let novonode = new Node(dado);
                raiz.direita = novonode;
            }else{
                this.insertNode(raiz.direita, dado)
            }
        }
    }
}


