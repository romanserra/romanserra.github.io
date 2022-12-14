let edad;
let genero;

edad = prompt("Introduce tu edad");
genero = prompt("Introduce tu género (hombre o mujer)");

if (genero == "hombre" && edad >= 18) {
  alert("Puedes entrar, eres mayor de edad.");
} else if (genero == "mujer" && edad >= 18) {
  alert("Puedes entrar, eres mayor de edad.");
} else {
  alert("Sos menor de edad para esta pagina, se te va a permitir el acceso pero estas bajo tu responsabilidad.");
}

function salirSitio(){
    alert("Estas saliendo de la pagina principal, seguro que deseas continuar?")
}

let ciudad = prompt("Coloca de que ciudad sos para ver si se te aplica un cupon de descuento");
  if (ciudad == "San Nicolas" || ciudad == "san nicolas de los arroyos" || ciudad == "San Nicolas De Los Arroyos" || ciudad == "SAN NICOLAS"){
    
    alert("Felicidades, tienes un cupon del 15 % descuento nombrando la palabra Hold Strong a la hora de ir pagar");
  }
  
  else {
    alert("No se te aplica el cupon");
  }