const audio = document.querySelector("#harry_potter");
audio.play();
audio.loop = true;
audio.control = true;

/* selectores */
const ingresarHogwarts = document.querySelector(".ingresarHogwarts");
const showContainer = document.querySelector(".secondary_container");
const ocultarIngreso = document.querySelector(".ingreso");
const choseHouse = document.querySelector("#sombrero");
const classDefense = document.querySelector("#robbinson");

// mostrar elementos antes de ingresar a Hogwarts
// ingresarHogwarts.addEventListener("click", (event) => {
//   event.preventDefault();
//   showContainer.setAttribute("style", "display:flex;");
//   ocultarIngreso.setAttribute("style", "display:none;");
// });

const botonAgregar = document.querySelector(".btn-agregar");
let nombreEstudiante = document.querySelector("#name-box");
let edadEstudiante = document.querySelector("#edad_box");
let padresSi = document.querySelector("#padres-si");
let padresNo = document.querySelector("#padres-no");
let sexo_femenino = document.querySelector("#sexo_femenino");
let sexo_masculino = document.querySelector("#sexo_masculino");

// function validarDatos() {
//   inputs = document.getElementsByTagName("input");
//   for (k in inputs) {
//     if (inputs[k].value == "") {
//       alert("Campos obligatorios");
//       return false;
//     }
//   }
// }
// console.log(validarDatos());

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();

  inputs = document.getElementsByTagName("input");
  for (k in inputs) {
    if (inputs[k].value == "") {
      alert("Campos obligatorios");
      return false;
    }
  }
  const infoEstudiante = document.querySelector(".info-estudiante");

  if (estudianteHogwarts) {
    infoEstudiante.innerHTML = "";
    estudianteHogwarts.nombre = "";
    estudianteHogwarts.edad = "";
    estudianteHogwarts.casa = "";
    estudianteHogwarts.linaje = "";
    estudianteHogwarts.padres = undefined;

    botonAgregar.textContent = "Agregar nuevo estudiante";

    setTimeout(() => {
      saveStudent();
    }, 500);
  }
  setTimeout(() => {
    nombreEstudiante.value = "";
    edadEstudiante.value = "";
    padresSi.checked = false;
    padresNo.checked = false;
    sexo_femenino.checked = false;
    sexo_masculino.checked = false;
    imprimirVoldemort();
  }, 1000);
});

classDefense.addEventListener("click", (e) => {
  e.preventDefault();

  if (!estudianteHogwarts.nombre) {
    return;
  }
  ArtesOscuras();
});

// imprimir mensaje Voldemort

let mensaje = document.querySelector(".texto-acciones");

let imagen = document.querySelector(".personaje-imagen");
let img = document.createElement("img");

function imprimirVoldemort() {
  mensaje.innerHTML = ` <p id = "intro">
  Se corre un rumor que el mismisimo Harry Potter ha vuelto.
  <br>
  <br>
  Y con el, la llegada de nada más y nada menos que el señor .....
  </p>`;
  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";

  img.src = "media/voldemort.png";
  img.style =
    "width: 100px;height: 150px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);
}

function saveStudent() {
  const nuevoEstudiante = {
    nombre: nombreEstudiante.value,
    edad: edadEstudiante.value,
    padres: padresSi.checked ? "Si" : "No",
    sexo: sexo_femenino.checked ? "femenino" : "masculino",
    animal: "",
  };
  const infoEstudiante = document.querySelector(".info-estudiante");

  let nombre = document.createElement("h5");
  nombre.textContent = `Nombre: ${nuevoEstudiante.nombre}`;
  nombre.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(nombre);

  let edad = document.createElement("h5");
  edad.textContent = `Edad: ${nuevoEstudiante.edad}`;
  edad.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(edad);

  let padres = document.createElement("h5");
  padres.textContent = `Padres: ${nuevoEstudiante.padres}`;
  padres.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(padres);

  let imgSexo = document.createElement("img");
  imgSexo.textContent = `${
    nuevoEstudiante.sexo === "femenino"
      ? (imgSexo.src = "./media/mujer.png")
      : (imgSexo.src = "./media/hombre.png")
  }`;
  imgSexo.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%;  overflow: hidden; bottom: -30px; left: 190px;"
  );
  infoEstudiante.appendChild(imgSexo);

  estudianteHogwarts = nuevoEstudiante;
  estudiantesNuevos.unshift(nuevoEstudiante);
}

let texto = document.querySelector("#intro");

choseHouse.addEventListener("click", (e) => {
  e.preventDefault();

  mensaje.innerHTML = "";

  if (!estudianteHogwarts.nombre) {
    return;
  }

  sombreroSeleccionador(texto);
});

// SOMBRERO SELECCIONADOR

function sombreroSeleccionador(texto) {
  img.src = "media/hat.png";
  img.style =
    "width: 100px;height: 150px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);

  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";
  mensaje.innerHTML = `SOMBRERO SELECCIONADOR: sientate y te dire tu destino y por ende tu nueva casa en Hogwarts!`;

  const clase = Number(Math.floor(Math.random() * 4 + 1));
  if (clase == 1) {
    mensaje.innerHTML = "";
    mensaje.innerHTML = `SOMBRERO SELECCIONADOR: siento valor... Fuerza... audacia en tu ser!
    <br>
    SOMBRERO SELECCIONADOR: GRYFFINDOR!
    <br>`;

    estudianteHogwarts.casa = casas[0];
    let opcionesLinaje = 3;
    linaje(opcionesLinaje);
  } else if (clase == 2) {
    mensaje.innerHTML = "";
    mensaje.innerHTML = `SOMBRERO SELECCIONADOR: siento justicia... lealtad... paciencia... en tu ser!
    <br>
    SOMBRERO SELECCIONADOR: HUFFLEPUFF!
    <br>`;
    estudianteHogwarts.casa = casas[1];
    let opcionesLinaje = 2;
    linaje(opcionesLinaje);
  } else if (clase == 3) {
    mensaje.innerHTML = "";
    mensaje.innerHTML = `SOMBRERO SELECCIONADOR: siento creatividad... erudición... inteligencia... en tu ser!
    <br>
    SOMBRERO SELECCIONADOR: RAVENCLAW!
    <br>`;
    estudianteHogwarts.casa = casas[2];
    let opcionesLinaje = 3;
    linaje(opcionesLinaje);
  } else {
    mensaje.innerHTML = "";
    mensaje.innerHTML = `SOMBRERO SELECCIONADOR: siento ambición... determinación... astucia en tu ser!
    <br>
    SOMBRERO SELECCIONADOR: SLYYYTHERIN!
    <br>`;
    estudianteHogwarts.casa = casas[3];
    mensaje.innerHTML += `SOMBRERO SELECCIONADOR: Sangre pura!! interesante!`;
    estudianteHogwarts.linaje = "Sangre pura";
  }

  if (estudianteHogwarts.casa && estudianteHogwarts.linaje) {
    const infoEstudiante = document.querySelector(".info-estudiante");
    let casa = document.createElement("h5");
    casa.textContent = `Casa: ${estudianteHogwarts.casa}`;
    casa.setAttribute("style", "font-size:20px; font-weigth:bold");
    infoEstudiante.appendChild(casa);
    let linaje = document.createElement("h5");
    linaje.textContent = `Linaje: ${estudianteHogwarts.linaje}`;
    linaje.setAttribute("style", "font-size:20px; font-weigth:bold");
    infoEstudiante.appendChild(linaje);
  }

  if (!estudianteHogwarts.casa) {
    return;
  }
}

function linaje(opcionesLinaje) {
  const linaje = Number(Math.floor(Math.random() * opcionesLinaje + 1));
  if (linaje == 1) {
    mensaje.innerHTML += `
    
    SOMBRERO SELECCIONADOR: Un mestizo...`;
    estudianteHogwarts.linaje = "Mestizo";
  } else if (linaje == 2) {
    mensaje.innerHTML += `
    
    SOMBRERO SELECCIONADOR: Un simple Muggle...`;
    estudianteHogwarts.linaje = "Muggle";
  } else {
    mensaje.innerHTML += `
    
    SOMBRERO SELECCIONADOR: Sangre pura!! interesante!`;
    estudianteHogwarts.linaje = "Sangre pura";
  }

  if (!estudianteHogwarts.linaje) {
    return;
  }
}

// if (!estudianteHogwarts.nombre){
//   return;
//  } transformaciones(texto);

function transformaciones() {
  let flagTransformacion = true;
  let boggartPresente = true;

  if (boggartPresente == true) {
    alert(`en el aula hay un boggart presente`);
    alert(`te preparas para hacer el hechizo Riddikulus sobre el!`);
    do {
      alert(`conjurando Riddikulus`);
      const transformacion = Number(Math.floor(Math.random() * 2 + 1));
      alert(`intentando hacer el hechizo Riddikulus... sobre el boggart`);
      if (transformacion == 1) {
        alert(
          `logras hacer perfectamente el hechizo riddikulus sobre el boggart`
        );
        tiposTransformaciones.riddikulus = "ha sido usado riddikulus";
        alert(`el boggart cambia de forma y ha sido derrotado!`);
        flagTransformacion = false;
        tiposTransformaciones.boggarts = "ha sido derrotado.";
      }
    } while (flagTransformacion == true);
  } else alert(`el boggart no esta presente`);

  console.log(tiposTransformaciones.riddikulus);
  console.log(tiposTransformaciones.boggarts);
}

function ArtesOscuras() {
  mensaje.innerHTML = "";
  mensaje.innerHTML = `Estas en la clase de Defensa contra artes Oscuras del ${clasesyProfesores[4].clase} de las ${clasesyProfesores[4].horario}`;

  if (estudianteHogwarts.animal === "") {
    generarPatronus();
  }

  function generarPatronus() {
    const randomPatronus = Number(
      Math.floor(
        Math.random() * defensaContraArtesOscuras.animalPatronus.length + 1
      )
    );
    let animal = defensaContraArtesOscuras.animalPatronus[randomPatronus];
    estudianteHogwarts.animal = animal;

    const infoEstudiante = document.querySelector(".info-estudiante");
    let anima = document.createElement("h5");
    anima.textContent = `Animal: ${estudianteHogwarts.animal}`;
    anima.setAttribute("style", "font-size:20px; font-weigth:bold");
    infoEstudiante.appendChild(anima);

    if (!estudianteHogwarts.animal) {
      return;
    }
  }

  function dementor() {
    if (estudianteHogwarts.animal !== "") {
      alert(
        `tu ${estudianteHogwarts.animal} lucha fuertemente con el dementor y logra que se aleje despues de un gran rayo de luz.`
      );
    } else {
      alert(
        `has sido absorbido por el dementor y eres llevado directamente a la enfermeria!`
      );
    }
  }
}

const btnEstudiante = document.querySelector("#estudiantes");
btnEstudiante.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "estudiantes.html";
});
