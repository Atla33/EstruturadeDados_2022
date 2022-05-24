import selectionSort from "../src/selectionSort";


let desordenados = [5, 3, 9, 6, 1, 10];
let ordenados = [1, 3, 5, 6, 9, 10];

test("teste ordenados",
    () => {
        expect(selectionSort(desordenados)).toStrictEqual(ordenados);
    })
