import { Questao2 } from "../../src/Quest.Listas/List1.Quest2";

let p;

beforeEach(
    () => {
        p = new Pilha(5);
    }
);

test("top", ()=>{

    p.push("A");
    p.push("B");
    p.push("A");
    p.push("C");
    p.push("A");
    p.push("X");
    p.push("I");
    
    expect(p.top()).toBe("A");
})