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
return (lado1+lado2+base)
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
    function calcularPerimetroTriangulo(){
        const input = document.getElementById("InputTriangulo")
        const input2 = document.getElementById("InputTriangulo2")
        const input3 = document.getElementById("InputTriangulo3")
        const value = Number(input.value);
        const value2 = Number(input2.value);
        const value3 = Number(input3.value);
        const perimetro = perimetroTriangulo(value,value2,value3);
        alert(perimetro); }
function calcularAreaTriangulo(){
    const input4 = document.getElementById("InputTriangulo4");
    const input5 = document.getElementById("InputTriangulo5")
    const value4 = Number(input4.value);
    const value5 = Number(input5.value);
    const area = areaTriangulo(value4,value5);
    alert(area); 
}
function calcularAlturaTriangulo(){
const input6 = document.getElementById("InputTriangulo");
const input7 = document.getElementById("InputTriangulo2");
const input8 = document.getElementById("InputTriangulo3");
const lado1 = Number(input6.value);
const lado2 = Number(input7.value);
const base = Number(input8.value);
if(lado1 != lado2){
    alert("¡lado 1 y lado 2 son distintos!")
}else{
    const altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2)/4))
    alert (altura.toFixed(2))
}
    }
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const diametro = diametroCirculo(value);
    alert(diametro)
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value)
    const perimetro = perimetroCiruclo(value)
    alert (perimetro.toFixed(2))
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value)
    const area = areaCirculo(value)
    alert (area.toFixed(2))
}