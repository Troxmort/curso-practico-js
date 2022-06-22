// Codigo del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles (ladoA1, ladoA2, baseA) {
    if (ladoA1 == ladoA2 && ladoA1 != baseA) {
        const cateto = (baseA / 2) ** 2;
        const hipotenusa = (ladoA1) ** 2;
        const altura = Math.sqrt((hipotenusa) - (cateto));
        alert("La altura es: " + altura);
    } else {
        alert("No es un triangulo isosceles.");
    }
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

function diametroCirculo (radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("PI es: " + PI);

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function areaCirculo (radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con el html.

// Codigo del cuadrado

function calcularPerimetroCuadrado () {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const valueCuadrado = Number(inputCuadrado.value);

    const perimetro = perimetroCuadrado(valueCuadrado);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const valueCuadrado = Number(inputCuadrado.value);

    const areaCuadrado = areaCuadrado(valueCuadrado);
    alert(areaCuadrado);
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
    alert(perimetroT);
}

function calcularAreaTriangulo () {
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const valueBaseTriangulo = Number(inputBaseTriangulo.value);

    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const valueAlturaTriangulo = Number(inputAlturaTriangulo.value);

    const areaT = areaTriangulo(valueBaseTriangulo, valueAlturaTriangulo);
    alert(areaT);
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
    alert(perimetroC);
}

function calcularAreaCirculo () {
    const inputCirculo = document.getElementById("inputCirculo");
    const valueCirculo = Number(inputCirculo.value);

    const areaC = areaCirculo(valueCirculo);
    alert(areaC);
}
