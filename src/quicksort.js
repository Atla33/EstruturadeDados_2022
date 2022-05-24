function quicksort(vetor, inferior, superior){

let pivo_pos;
let pivo
let i, j; 

if(inferior < superior){

    pivo = vetor[superior].
    i = inferior - 1

    for ( j = inferior; j <=  superior-1; j++) {
        if (vetor[j] <= pivo) {
            i++
            troca(vetor[j], vetor[i])
        }
    }
    troca(vetor[superior], vetor[i+1]);
    pivo_pos = i+1
}


}

export default quicksort;

// https://gist.github.com/felladrin/2306459