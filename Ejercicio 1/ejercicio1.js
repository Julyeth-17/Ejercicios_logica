/* ejercicio 1 */

let n = parseInt(prompt('Ingrese un número'));

if (!isNaN(n)) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    document.getElementById('resultadoSuma').textContent = "La suma de los números del 1 al " + n + " es: " + suma;
}
n;