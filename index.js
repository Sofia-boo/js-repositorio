const cm = "cm";
const cm2 = "cm cuadrados"

console.group("cuadrados")

function perimetroCuadrado(lado){
    return lado * 4
} 


function areaCuadrado(lado){
return lado*lado
}

console.groupEnd();


console.group("triangulos")
function perimetroTriangulo(lado1,lado2,base){
return lado1+lado2+base
}

function areaTriangulo(base,altura){
    return (base*altura)/2
}




console.groupEnd();



console.group("Circulos");

function diametroCirculo(radio){
    return radio*2
}
const pi = Math.PI;

function perimetroCiruclo(radio){
    const diametro =diametroCirculo(radio);
    return diametro * pi
}

function areaCirculo(radio){
    return (radio*radio)*pi
}

console.groupEnd();

//integro HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
