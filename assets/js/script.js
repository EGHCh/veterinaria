class Propietario {
 #nombrePropietario;
 constructor(nombrePropietario, direccion, telefono) {
  this.#nombrePropietario = nombrePropietario;
  this.direccion = direccion;
  this.telefono = telefono;
 }

 datosPropietario() {
  return `El nombre del dueño es ${this.#nombrePropietario}, El domicilio es: ${
   this.direccion
  }, y su numero telefónico es ${this.telefono}`;
 }
}

class Animal extends Propietario {
 constructor(
  tipo,
  nombrePropietario,
  direccionPropietario,
  telefonoPropietario
 ) {
  super(nombrePropietario, direccionPropietario, telefonoPropietario);
  this._tipo = tipo;
 }
 get tipo() {
  return `El tipo de animal es: ${this._tipo}`;
 }
}

class Mascota extends Animal {
 constructor(
  nombre,
  enfermedad,
  tipoAnimal,
  nombrePropietario,
  direccionPropietario,
  telefonoPropietario
 ) {
  super(
   tipoAnimal,
   nombrePropietario,
   direccionPropietario,
   telefonoPropietario
  );
  this.nombre = nombre;
  this.enfermedad = enfermedad;
 }
}

$(document).ready(() => {
 const $propietario = $("#propietario");
 const $telefono = $("#telefono");
 const $direccion = $("#direccion");
 const $nombreMascota = $("#nombreMascota");
 const $tipo = $("#tipo");
 const $enfermedad = $("#enfermedad");
 const $resultado = $("#resultado");
 const $agregar = $("#agregar");

 $agregar.click(($event) => {
  $event.preventDefault();
  let $nuevoPerro, $nuevoGato, $nuevoConejo;
  if ($tipo.val() == "perro") {
   $nuevoPerro = new Mascota(
    $nombreMascota.val(),
    $enfermedad.val(),
    $tipo.val(),
    $propietario.val(),
    $direccion.val(),
    $telefono.val()
   );
   $resultado.children(0).html(`<li>${$nuevoPerro.datosPropietario()}</li>
   <li>El tipo de animal es un: ${
    $nuevoPerro.tipo
   }, mientras que el nombre de la mascota es: ${
    $nuevoPerro.nombre
   } y la enfermedad es: ${$nuevoPerro.enfermedad}</li>
   `);
  } else if ($tipo.val() == "gato") {
   $nuevoGato = new Mascota(
    $nombreMascota.val(),
    $enfermedad.val(),
    $tipo.val(),
    $propietario.val(),
    $direccion.val(),
    $telefono.val()
   );
   $resultado.children(0).html(`<li>${$nuevoGato.datosPropietario()}</li>
   <li>El tipo de animal es un: ${
    $nuevoGato.tipo
   }, mientras que el nombre de la mascota es: ${
    $nuevoGato.nombre
   } y la enfermedad es: ${$nuevoGato.enfermedad}</li>
   `);
  } else {
   $nuevoConejo = new Mascota(
    $nombreMascota.val(),
    $enfermedad.val(),
    $tipo.val(),
    $propietario.val(),
    $direccion.val(),
    $telefono.val()
   );
   $resultado.children(0).html(`<li>${$nuevoConejo.datosPropietario()}</li>
    <li>El tipo de animal es un: ${
     $nuevoConejo.tipo
    }, mientras que el nombre de la mascota es: ${
    $nuevoConejo.nombre
   } y la enfermedad es: ${$nuevoConejo.enfermedad}</li>
    `);
  }
  console.log($nuevoPerro);
 });
});
