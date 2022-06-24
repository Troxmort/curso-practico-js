//==========================PERIMETRO Y AREA==========================
// Primer taller practico del curso basico de JS

// Codigo del cuadrado

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

// Codigo del triangulo

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles (ladoA1, ladoA2, baseA) {
    if (ladoA1 == ladoA2 && ladoA1 != baseA) {
        const cateto = (baseA / 2) ** 2;
        const hipotenusa = (ladoA1) ** 2;
        const altura = Math.sqrt((hipotenusa) - (cateto));
        const resultadoTI = document.getElementById("resultadoTI");
        resultadoTI.innerText = "La altura del triagulo isosceles es: " + altura + "cm";
    } else {
        const resultadoTI = document.getElementById("resultadoTI");
        resultadoTI.innerText = "El triangulo no es un isosceles";
    }
}

// Codigo del circulo

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

// Aqui interactuamos con el html.

// Codigo del cuadrado

function calcularPerimetroCuadrado () {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const valueCuadrado = Number(inputCuadrado.value);

    const perimetro = perimetroCuadrado(valueCuadrado);
    const resultadoCu = document.getElementById("resultadoCu");
    resultadoCu.innerText = "El perimetro del cuadrado es de: " + perimetro + "cm";
}

function calcularAreaCuadrado () {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const valueCuadrado = Number(inputCuadrado.value);

    const areaCuadradoa = areaCuadrado(valueCuadrado);
    const resultadoCu = document.getElementById("resultadoCu");
    resultadoCu.innerText = "El area del cuadradi es de: " + areaCuadradoa + "cm";
}

// Codigo del triangulo

function calcularPerimetroTriangulo () {
    const inputTriangulo = document.getElementById("inputTriangulo");
    const valueTriangulo = Number(inputTriangulo.value);

    const inputTriangulo1 = document.getElementById("inputTriangulo1");
    const valueTriangulo1 = Number(inputTriangulo1.value);

    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const valueBaseTriangulo = Number(inputBaseTriangulo.value);

    const perimetroT = perimetroTriangulo(valueTriangulo, valueTriangulo1, valueBaseTriangulo);
    const resultadoT = document.getElementById("resultadoT");
    resultadoT.innerText = "El perimetro del triangulo es: " + perimetroT + "cm";
}

function calcularAreaTriangulo () {
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const valueBaseTriangulo = Number(inputBaseTriangulo.value);

    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const valueAlturaTriangulo = Number(inputAlturaTriangulo.value);

    const areaT = areaTriangulo(valueBaseTriangulo, valueAlturaTriangulo);
    const resultadoT = document.getElementById("resultadoT");
    resultadoT.innerText = "El area del triangulo es de: " + areaT + "cm";
}

function calcularAlturaTrianguloIsosceles () {
    const inputTrianguloA = document.getElementById("inputTrianguloA");
    const valueTrianguloA = Number(inputTrianguloA.value);

    const inputTriangulo1A = document.getElementById("inputTriangulo1A");
    const valueTriangulo1A = Number(inputTriangulo1A.value);

    const inputBaseTrianguloA = document.getElementById("inputBaseTrianguloA");
    const valueBaseTrianguloA = Number(inputBaseTrianguloA.value);

    const alturaT = alturaTrianguloIsosceles(valueTrianguloA, valueTriangulo1A, valueBaseTrianguloA);
}

// Codigo del circulo

function calcularPerimetroCirculo () {
    const inputCirculo = document.getElementById("inputCirculo");
    const valueCirculo = Number(inputCirculo.value);

    const perimetroC = perimetroCirculo(valueCirculo);
    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El perimetro del circulo es de: " + perimetroC + "cm";
}

function calcularAreaCirculo () {
    const inputCirculo = document.getElementById("inputCirculo");
    const valueCirculo = Number(inputCirculo.value);

    const areaC = areaCirculo(valueCirculo);
    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El area del circulo es de: " + areaC + "cm";
}


// ==========================PROCENTAJES Y DESCUENTOS==========================
// Segundo taller practico del curso basico de JS.

const cupones = ["matias", "troxmort", "matu"];

function calcularPrecioConDescuento (precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}

function calcularPorcentajeDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = Number(inputPrecio.value);

    const inputCupones = document.getElementById("inputCupones");
    const valueCupones = inputCupones.value;

    let descuento;

    switch (valueCupones) {
        case cupones[0]:
            descuento = 15;
        break;
        case cupones[1]:
            descuento = 30;
        break;
        case cupones[2]:
            descuento = 25;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, descuento);
    
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// ==========================PROMEDIOS Y MODA==========================
// Tercer taller practico del curso basico de JS.

// Promedio

function calcularMediaAritmetica (lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Mediana

const lista1 = [340, 600,500, 100, 200, 400000000];
function compareNumbers(a, b) {
    return a - b;
  }
lista1.sort(compareNumbers);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;
const mitadLista1 = parseInt(lista1.length / 2);

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}


// Moda

const lista2 = [1, 2, 6, 65, 652, 235, 2, 48596, 2, 985, 9898, 121, 2, 689, 2];

const lista2count = {};

lista2.map(
    function (elemento) {
        if (lista2count[elemento]) {
            lista2count[elemento] += 1;
        } else {
            lista2count[elemento] = 1;
        }
    }
);

const lista2array = Object.entries(lista2count).sort(
    function (valorAcumuladoModa, nuevoValorModa) {
        return valorAcumuladoModa[1] - nuevoValorModa[1];
    }
);

const moda = lista2array[lista2array.length - 1];
