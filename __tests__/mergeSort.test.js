import mergeSort from "../src/mergeSort"


let desordenados = [5, 3, 9, 6, 1, 10];
let ordenados = [1, 3, 5, 6, 9, 10];

test("teste ordenados",
    () => {
        expect(mergeSort(desordenados)).toStrictEqual(ordenados);
    })