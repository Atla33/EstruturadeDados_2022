import buscaBinaria from "../src/Quest.Listas/buscaBinaria";


let tabela = [1, 3, 5, 6, 9, 10];
let chave = 6
let achou = [6];

test("teste Busca Binaria",
    () => {
        expect(buscaBinaria(tabela, chave)).toBe(achou);
    })
