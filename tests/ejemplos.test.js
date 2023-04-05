const { expect } = require('expect');

function sumar(a, b) {
    return (a + b);
};

describe('Jest test.each examples:', () => {

    describe('Array of Arrays', () => {

        test.each(
            [
                [1, 1, 2],
                [1, 2, 3],
                [2, 1, 3],
            ]
        )('sumar(%i, %i) = %i', (a, b, resultado) => {
            expect(sumar(a, b)).toBe(resultado);
        });

    });

    describe('Array of objects', () => {

        test.each(
            [
                { a: 1, b: 1, resultado: 2 },
                { a: 1, b: 2, resultado: 3 },
                { a: 2, b: 1, resultado: 3 },
            ]
        )('sumar($a, $b) = $resultado', ({ a, b, resultado }) => {
            expect(sumar(a, b)).toBe(resultado);
        });

    });

    describe('Table', () => {

        test.each`
        a    | b    | expected
        ${1} | ${1} | ${2}
        ${1} | ${2} | ${3}
        ${2} | ${1} | ${3}
        `('returns $expected when $a is added to $b', ({ a, b, expected }) => {
            expect(sumar(a, b)).toBe(expected);
        });

    });

});
