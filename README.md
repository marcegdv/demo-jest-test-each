# JEST - test.each

Ejemplos de como implementar la función `test.each` para realizar tests de unidad. 
- Nota: También aplica para `it.each` usándose de la misma forma.

Lo que busca esta funcionalidad es reducir un grupo de tests en los que lo único que cambia entre estos, son los datos, y dependiendo del escenario, poder reducirlos a un solo test (en código) que recibe una tabla como fuente de dichos datos.

Esto también reduce el tamaño del código productivo.

---

## Ejemplos de implementación:

Supongamos la función `sumar(a, b)` que retorna la suma de dos números:

```js
function sumar (a, b) {
    return a + b;
};
```
- Usando un Array que contiene otros arrays con los datos:
```js
test.each(
    [
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
    ]
)('sumar(%i, %i) = %i', (a, b, resultado) => {
    expect(sumar(a, b)).toBe(resultado);
});
```
- Usando un Array que contiene objetos con los datos:
```js
test.each(
    [
        {a: 1, b: 1, resultado: 2},
        {a: 1, b: 2, resultado: 3},
        {a: 2, b: 1, resultado: 3},
    ]
)('sumar($a, $b) = $resultado', ({a, b, resultado}) => {
    expect(sumar(a, b)).toBe(resultado);
});
```
- Usando *template literal*:
```js
test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({a, b, expected}) => {
    expect(sumar(a, b)).toBe(expected);
});
```

En los títulos descriptivos de los tests se pueden inyectar los valores obtenidos del array de datos para el test, o del objeto, o el índice del array que se esta utilizando para ejecutar un test. En los ejemplos anteriores se puede ver como utilizar esta funcionalidad.

También se pueden usar las siguientes opciones:

- Usando el [formateo de printf](https://nodejs.org/api/util.html#util_util_format_format_args):
    - `%p` - pretty-format
    - `%s`- String
    - `%d`- Number
    - `%i` - Integer
    - `%f` - Floating point value
    - `%j` - JSON
    - `%o` - Object
    - `%#` - Indice del test en ejecución
    - `%%` - signo porcentaje ('%'). Muestra el signo y no usa datos del array
- Usando el nombre del atributo de un objeto utilizado como fuente de los datos del test. Ejemplo: `$variable`
    - Para objetos anidados, se puede escribir la ruta: *$variable.path.to.value*
    - Para agregar el índice del tests en ejecución, usar `$#`
    - No se puede usar `$variable` en el *formateo de printf* excepto `%%`

---

Si usas Visual Studio Code, te recomiendo instalar la extensión **Jest Runner** para una fácil y controlada ejecución de tests.

![image](https://github.com/marcegdv/demo-jest-test-each/blob/master/docs/JestRunnerExtension.png)

---

Link a la web oficial de **Jest**: https://jestjs.io/docs/api#testeachtablename-fn-timeout