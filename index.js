const cm = "cm";
const cm2 = "cm cuadrados"

console.group("cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " +ladoCuadrado+cm);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+cm);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado+cm2);
console.groupEnd();


console.group("triangulos")
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
console.log("los lados del triangulo miden " +ladoTriangulo1+cm+ " ," +ladoTriangulo2+cm+ " y" +baseTriangulo+cm+ ".")

const alturaTriangulo=5.5;
console.log("La altura del Triangulo es: " + alturaTriangulo+cm);


const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo+cm);

const areaTriangulo = (baseTriangulo*alturaTriangulo) /2;
console.log("El area del triangulo es: " + areaTriangulo+cm2);
console.groupEnd();



console.group("Circulos");

const radioCirculo = 4;
console.log("el radio del circulo mide: "+ radioCirculo+cm)

const diametroCirculo= radioCirculo * 2
console.log("el diametro del circulo mide: " +diametroCirculo+cm)

const PI = Math.PI;
const perimetroCirculo =diametroCirculo * PI;
console.log("El perimetro del circulo mide: "+ perimetroCirculo+cm)

const areaCirculo =(radioCirculo*radioCirculo) * PI;
console.log("El area del circulo mide: "+areaCirculo+cm2)






console.groupEnd();