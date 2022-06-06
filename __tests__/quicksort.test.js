import quicksort from "../src/quicksort"

let tabela = [3, 7, 2, 10, 8, 5, 4];
let dadosOrdenados = [2, 3, 4, 5, 7, 8, 10];
let inferior = 0
let superior = tabela.length - 1

test("teste Quick Sort",
    () => {
        expect(quicksort(tabela, inferior, superior)).toStrictEqual(dadosOrdenados);
    })