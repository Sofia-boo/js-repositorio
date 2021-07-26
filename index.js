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
function perimetroTriangulo(lado,base){
return (lado*2)+base
}
function areaTriangulo(base,lado1){
    return (base*(Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2)/4))))/2
}
function perimetroTrianguloEquilatero(lado){
    return lado*3
}
function areaTrianguloEquilatero(lado){
    return (lado * Math.sqrt(Math.pow(lado,2) - Math.pow((lado/2), 2)))/2
    //base * altura
}
function AlturaTrianguloEquilatero(lado){
 return Math.sqrt(Math.pow(lado,2) - Math.pow((lado/2), 2))
}

function perimetroTrianguloEscaleno(lado,lado2,lado3){
    return lado+lado2+lado3
}
function AreaTrianguloEscaleno(lado,lado2,lado3){
    return Math.sqrt(((lado+lado2+lado3)/2)(((lado+lado2+lado3)/2)-lado)(((lado+lado2+lado3)/2)-lado2)*(((lado+lado2+lado3)/2)-lado3))
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
    document.getElementById("resultadoCuadrado").innerHTML = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("resultadoCuadrado").innerHTML = area;
}
    function calcularPerimetroTriangulo(){
        const input = document.getElementById("InputTriangulo")
        const input2 = document.getElementById("InputTriangulo2")
        const value = Number(input.value);
        const value2 = Number(input2.value);
        const perimetro = perimetroTriangulo(value,value2);
        document.getElementById("resultadoTriangulo").innerHTML = perimetro.toFixed(2);
    }
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2")
    const value = Number(input.value);
    const value2 = Number(input2.value);
    const area = areaTriangulo(value,value2);
    document.getElementById("resultadoTriangulo").innerHTML = area.toFixed(2);
    
}
function calcularAlturaTriangulo(){
const input = document.getElementById("InputTriangulo");
const input2 = document.getElementById("InputTriangulo2");
const lado1 = Number(input.value);
const base = Number(input2.value);
    const altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2)/4))
    document.getElementById("resultadoTriangulo").innerHTML = altura.toFixed(2);

    }
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const diametro = diametroCirculo(value);
    document.getElementById("resultadoCirculo").innerHTML = diametro;
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value)
    const perimetro = perimetroCiruclo(value)
    document.getElementById("resultadoCirculo").innerHTML = perimetro.toFixed(2);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value)
    const area = areaCirculo(value)
    document.getElementById("resultadoCirculo").innerHTML = area.toFixed(2);
}
function calcularPerimetroTrianguloEquilatero(){
    const input = document.getElementById("InputTrianguloEquilatero")
    const value = Number(input.value)
    const perimetro = perimetroTrianguloEquilatero(value)
    document.getElementById("resultadoTrianguloEquilatero").innerHTML = perimetro.toFixed(2);
}
function calcularAlturaTrianguloEquilatero(){
const input=document.getElementById("InputTrianguloEquilatero")
const value = Number(input.value)
const altura = AlturaTrianguloEquilatero(value)
document.getElementById("resultadoTrianguloEquilatero").innerHTML = altura.toFixed(2);
}
function calcularAreaTrianguloEquilatero(){
    const input=document.getElementById("InputTrianguloEquilatero")
    const value = Number(input.value)
    const area = areaTrianguloEquilatero(value)
    document.getElementById("resultadoTrianguloEquilatero").innerHTML = area.toFixed(2)
}

function calcularPerimetroTrianguloEscaleno(){
    const input = document.getElementById("InputTrianguloEscaleno")
    const input2 = document.getElementById("InputTrianguloEscaleno2")
    const input3 = document.getElementById("InputTrianguloEscaleno3")
    const value = Number(input.value)
    const value2 = Number(input2.value)
    const value3 = Number(input3.value)
    const perimetro = perimetroTrianguloEscaleno(value,value2,value3)
    document.getElementById("resultadoTrianguloEscaleno").innerHTML = perimetro.toFixed(2)
}
function calcularAreaTrianguloEscaleno(){
    const input = document.getElementById("InputTrianguloEscaleno")
    const input2 = document.getElementById("InputTrianguloEscaleno2")
    const input3 = document.getElementById("InputTrianguloEscaleno3")
    const value = Number(input.value)
    const value2 = Number(input2.value)
    const value3 = Number(input3.value)
    const area = AreaTrianguloEscaleno(value,value2,value3)
    document.getElementById("resultadoTrianguloEscaleno").innerHTML = area.toFixed(2)
}