import insertionSort from "../src/InsertionSort";

let desordenados = [5,8,13,2,4,1];
let ordenados = [1,2,4,5,8,13];

test("teste ordenados",
    () => {
        expect(insertionSort(desordenados)).toStrictEqual(ordenados);
    }
)


//https://gist.github.com/felladrin/2306459