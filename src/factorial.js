const factorial = (entero) => {
    validar(entero);
    return calcular(entero);
};

const validar = (entero) => {
    if ((typeof entero !== 'number')) throw Error(`El tipo ${typeof entero} no es un número.`);
    if (isNaN(entero)) throw Error(`${entero} no es un número.`);
    if (!Number.isInteger(entero)) throw Error(`${entero} es decimal.`);
    if (entero < 0) throw Error(`${entero} es negativo.`);
};

const calcular = (entero) => {
    if (entero <= 1) return 1;
    return entero *= calcular(entero - 1);
};

module.exports = { factorial };