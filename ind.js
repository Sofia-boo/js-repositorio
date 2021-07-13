function perimetroCuadrado(lado){
    return lado * 4
} 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("formula").innerHTML = perimetro;
}

function mostrar() {
    var x = document.getElementById("parrafo1").innerHTML;
    document.getElementById("parrafo2").innerHTML = x;
}