let altura = document.getElementById("altura");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaDeLaPersona: number = Number(altura.value);

  if (alturaDeLaPersona <= alturaPermitida) {
    console.log("La persona no puede subirse a la montaña rusa");
  } else {
    console.log("La persona puede subirse a la montaña rusa");
  }
});
