import bubbleSort from "../src/BubbleSort";

test("Teste Bubble sort", () => {

    let dadosNaoOrdenados = [7, 5, 25, 8, 9, 14];
    let dadosOrdenados = [5, 7, 8, 9, 14, 25];

    expect(bubbleSort(dadosNaoOrdenados)).toStrictEqual(dadosOrdenados);
})