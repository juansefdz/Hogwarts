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
ingresarHogwarts.addEventListener("click", (event) => {
  event.preventDefault();
  showContainer.setAttribute("style", "display:flex;");
  ocultarIngreso.setAttribute("style", "display:none;");
});

const botonAgregar = document.querySelector(".btn-agregar");
const nombreEstudiante = document.querySelector("#name-box");
const edadEstudiante = document.querySelector("#edad_box");
const padresSi = document.querySelector("#padres-si");
const padresNo = document.querySelector("#padres-no");
const sexo_femenino = document.querySelector("#sexo_femenino");
const sexo_masculino = document.querySelector("#sexo_masculino");

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();

  saveStudent();
});

classDefense.addEventListener("click", (e) => {
  e.preventDefault();
  ArtesOscuras();
});

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
    "position: absolute; width: 100%; height: 100%; object-fit: cover; overflow: hidden; bottom: -30px; left: 190px;"
  );
  infoEstudiante.appendChild(imgSexo);

  estudianteHogwarts = nuevoEstudiante;
  estudiantesNuevos.unshift(nuevoEstudiante);
  console.log(estudiantesNuevos);

  console.log(estudianteHogwarts);
}

let texto = document.querySelector("#intro");

choseHouse.addEventListener("click", (e) => {
  e.preventDefault();
  sombreroSeleccionador(texto);
});

// SOMBRERO SELECCIONADOR

function sombreroSeleccionador(texto) {
  const img = document.querySelector(".personaje-imagen");

  img.innerHTML = `<img src="./media/hat.png"/> `;
  img.setAttribute(
    "styles",
    "width: 100px;height: 150px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;"
  );

  texto.innerHTML = "";
  texto.innerHTML = `SOMBRERO SELECCIONADOR: sientate y te dire tu destino y por ende tu nueva casa en Hogwarts!`;

  const clase = Number(Math.floor(Math.random() * 4 + 1));
  console.log(clase);
  if (clase == 1) {
    texto.innerHTML = "";
    texto.innerHTML = `SOMBRERO SELECCIONADOR: siento valor... Fuerza... audacia en tu ser!\n`;
    texto.innerHTML += `SOMBRERO SELECCIONADOR: GRYFFINDOR!`;

    estudianteHogwarts.casa = casas[0];
    let opcionesLinaje = 3;
    linaje(opcionesLinaje);
  } else if (clase == 2) {
    texto.innerHTML = "";
    texto.innerHTML = `SOMBRERO SELECCIONADOR: siento justicia... lealtad... paciencia... en tu ser!\n`;
    texto.innerHTML += `SOMBRERO SELECCIONADOR: HUFFLEPUFF!`;
    estudianteHogwarts.casa = casas[1];
    let opcionesLinaje = 2;
    linaje(opcionesLinaje);
  } else if (clase == 3) {
    texto.innerHTML = "";
    texto.innerHTML = `SOMBRERO SELECCIONADOR: siento creatividad... erudición... inteligencia... en tu ser!\n`;
    texto.innerHTML += `SOMBRERO SELECCIONADOR: RAVENCLAW!`;
    estudianteHogwarts.casa = casas[2];
    let opcionesLinaje = 3;
    linaje(opcionesLinaje);
  } else {
    texto.innerHTML = "";
    texto.innerHTML = `SOMBRERO SELECCIONADOR: siento ambición... determinación... astucia en tu ser!\n`;
    texto.innerHTML += `SOMBRERO SELECCIONADOR: SLYYYTHERIN!`;
    estudianteHogwarts.casa = casas[3];
    estudianteHogwarts.linaje = "Pura sangre";
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
  console.log(estudianteHogwarts);
}
//PASO 3

/* INVOCACION FUNCIONES */

// estudiante();
// sombreroSeleccionador();
// transformaciones();
//ArtesOscuras();
// dementor();

/* FUNCIONES */

// function estudiante() {

//   if (familia == 1) {
//     familia = true;
//   } else familia = false;

//   const nuevoEstudiante = { nombreEstudiante, edadEstudiante, familia };
//   estudiantesNuevos.unshift(nuevoEstudiante);
//   console.log(estudiantesNuevos);

//   const agregarInfoEstudiante = document.getElementById("agregar-estudiante");
//   const InfoEstudiante = document.getElementById("info-estudiante");
//   // agregar imagen segun el sexo.

//   //insertar texto en tarjeta de personaje
//   tbody.innerHTML += ``;

function linaje(opcionesLinaje) {
  const linaje = Number(Math.floor(Math.random() * opcionesLinaje + 1));
  if (linaje == 1) {
    alert(`mestizo...`);
    estudianteHogwarts.linaje = "Mestizo";
  } else if (linaje == 2) {
    alert(`un simple Muggle...`);
    estudianteHogwarts.linaje = "Muggle";
  } else {
    alert(`sangre pura!! interesante!`);
    estudianteHogwarts.linaje = "Sangre pura";
  }
}

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
  alert(
    `estas en la clase de Defensa contra artes Oscuras del ${clasesyProfesores[4].clase} de las ${clasesyProfesores[4].horario}`
  );

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
