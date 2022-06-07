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

    Remover(dado){
        this.raiz = this.RemoverNo(this.raiz, dado);
    }

    RemoverNo(Node, key){
        if (Node === null){
            return null;
        } else if (key > Node.dado){
            Node.direita = this.RemoverNo(Node.direita, key);
            return Node;
        } else {
            if (Node.esquerda === null && Node.direita === null){
                Node = null;
                return Node;
            } 
            if(Node.esquerda === null){
                Node = Node.direita;
                return Node;
            } else if (Node.direita === null){
                Node = Node.esquerda;
                return Node;
            }
            let aux = this.EncontrarMenorNo(Node.direita);
            Node.dado = aux.dado;
            Node.direita = this.RemoverNo(Node.direita, aux.dado);
            return Node;
        }
    }
    EncontrarMenorNo(Node){
        if (Node.esquerda===null){
            return Node;
        } else {
            return this.EncontrarMenorNo(Node.esquerda);
        }
    }
}


