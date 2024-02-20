//Crear un arreglo de objetos. minimo 3 objetos y desestructurar y recorrer en una funcion
//herramientas, frutas, verduras
const objeto = [
  { nombre: "Martillo" },
  { nombre: "Sierra" },
  { nombre: "Desarmador" },
  { nombre: "Jitomate" },
  { nombre: "Papa" },
  { nombre: "Tomate" },
  { nombre: "Manzana" }, 
  { nombre: "Pera" }, 
  { nombre: "Sandia" }
];
const recorrer = () => {
  const objetos = objeto.map(({ nombre }) => nombre);
  console.log(objetos);
}

recorrer()
