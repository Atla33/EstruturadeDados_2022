class Fila{
    constructor(size){
        this.inicio = 1;
        this.fim = 0;
        this.capacidade = size;
        this.dados = [];
    }

    isEmpty(){
        return this.inicio === this.fim
    }

    isFull(){
        return this.inicio ===this.fim +1
    }

    length(){
        if(this.isEmpty()) return 0;
        if (this.inicio< this.fim) return this.fim - this.inicio;
        else return (this.capacidade - this.inicio + this.fim + 1);  
    }

    front(){
        if(!this.isEmpty()){
            return this.dados[this.inicio]
        }
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado
            if(this.fim === this.capacidade){
                this.fim = 0
            }else{
                this.fim++
            }
        }else{
            throw new Error("queue overflow")
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            if(this.inicio === this.capacidade){
                this.inicio = 0;
            }else{
                this.inicio++
            }
        }else{
            throw new Error ("queue underflow")
        }
    }
}
export default Fila;