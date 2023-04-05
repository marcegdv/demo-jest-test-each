const { expect } = require('expect');
const { factorial } = require('../src/factorial.js');

describe('Función factorial(entero):', () => {

    test('factorial_recibeElValor0_retorna1', () => {
        const valor = 0;
        const resultado = 1;
        expect(factorial(valor)).toBe(resultado);
    });

    test('factorial_recibeElValor4_retorna24', () => {
        const valor = 4;
        const resultado = 24;
        expect(factorial(valor)).toBe(resultado);
    });

    test('factorial_recibeElValor444_retornaInfinity', () => {
        const valor = 444;
        const resultado = Infinity;
        expect(factorial(valor)).toBe(resultado);
    });

    test('factorial_recibeUnValorDecimal_retornaErrorNúmeroDecimal', () => {
        const valor = 0.1415927;
        const resultado = Error(`${valor} es decimal.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnValorNegativo_retornaErrorPorValorNegativo', () => {
        const valor = -3;
        const resultado = Error(`${valor} es negativo.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnValorNegativoDecimal_retornaErrorPorValorDecimal', () => {
        const valor = -3.1;
        const resultado = Error(`${valor} es decimal.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnValorNaN_retornaErrorNoEsUnNúmero', () => {
        const valor = NaN;
        const resultado = Error(`${valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnObjetoVacío_retornaErrorNoEsUnNúmero', () => {
        const valor = {};
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnObjeto_retornaErrorNoEsUnNúmero', () => {
        const valor = { valor: 3 };
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnArrayVacío_retornaErrorNoEsUnNúmero', () => {
        const valor = [];
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnArrayDeNúmeros_retornaErrorNoEsUnNúmero', () => {
        const valor = [1, 2];
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnaCadena_retornaErrorNoEsUnNúmero', () => {
        const valor = '3';
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnNull_retornaErrorNoEsUnNúmero', () => {
        const valor = null;
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

    test('factorial_recibeUnUndefined_retornaErrorNoEsUnNúmero', () => {
        const valor = undefined;
        const resultado = Error(`El tipo ${typeof valor} no es un número.`);
        expect.assertions(1);
        try {
            factorial(valor);
        } catch (error) {
            expect(error).toEqual(resultado);
        };
    });

});