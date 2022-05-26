import buscaSequencial from "../src/buscaSequencial";

let busca = [1, 3, 5, 6, 9, 10];
let chave = 5
let chave2 = 12

test("teste Busca sequencial",
    () => {
        expect(buscaSequencial(busca, chave)).toBe(5);
    })

test("teste Busca sequencial",
    () => {
        expect(buscaSequencial(busca, chave2)).toBe(-1);
    })