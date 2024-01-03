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
const classTranformacion = document.querySelector("#kevin");
const classPociones = document.querySelector("#lili");

// mostrar elementos antes de ingresar a Hogwarts

const botonAgregar = document.querySelector(".btn-agregar");

let nombreEstudiante = document.querySelector("#name-box");
let edadEstudiante = document.querySelector("#edad_box");
let padresSi = document.querySelector("#padres-si");
let padresNo = document.querySelector("#padres-no");
let sexo_femenino = document.querySelector("#sexo_femenino");
let sexo_masculino = document.querySelector("#sexo_masculino");

let mensaje = document.querySelector(".texto-acciones");
let imagen = document.querySelector(".personaje-imagen");
let img = document.createElement("img");

botonAgregar.style.display = "none";
imprimirVoldemort();

function mensajeInicial() {
  mensaje.innerHTML = ` <p id = "intro">
  Debes ingresar tu información básica para iniciar, 
  <br>
  luego selecciona una clase para continuar!
  </p>`;
  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";

  img.src = "media/mandragora.png";
  img.style =
    "width: 300px;height: 350px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);
}

const validar = () => {
  createStudent();
  if (
    estudianteHogwarts.nombre &&
    estudianteHogwarts.edad &&
    estudianteHogwarts.padres &&
    estudianteHogwarts.sexo
  ) {
  }
};

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();

  const infoEstudiante = document.querySelector(".info-estudiante");

  /**Formatear valores */
  setTimeout(() => {
    nombreEstudiante.value = "";
    edadEstudiante.value = "";
    padresSi.checked = false;
    padresNo.checked = false;
    sexo_femenino.checked = false;
    sexo_masculino.checked = false;
    infoEstudiante.innerHTML = "";
    estudianteHogwarts.nombre = "";
    estudianteHogwarts.edad = "";
    estudianteHogwarts.casa = "";
    estudianteHogwarts.linaje = "";
    estudianteHogwarts.animal = "";
    estudianteHogwarts.padres = undefined;
    estudianteHogwarts.sexo = undefined;
    botonAgregar.setAttribute("styles", "display:none");
  }, 2000);
});

classTranformacion.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");

  for (input in inputs) {
    if (inputs[input].value == "") {
      alert("Campos obligatorios");
      return false;
    }
  }
  if (estudianteHogwarts.nombre !== "") {
    transformaciones();
    return;
  }
  validar();
  transformaciones();
});

let texto = document.querySelector("#intro");

choseHouse.addEventListener("click", (e) => {
  e.preventDefault();

  if (estudianteHogwarts.casa) {
    return;
  }

  const inputs = document.getElementsByTagName("input");

  for (input in inputs) {
    if (inputs[input].value == "") {
      alert("Campos obligatorios");
      return false;
    }
  }

  if (estudianteHogwarts.nombre !== "") {
    sombreroSeleccionador(texto);
    return;
  }
  validar();

  mensaje.innerHTML = "";

  if (!estudianteHogwarts) {
    alert("Se debe ir a todas las clases antes de crear un nuevo estudiante");
    return;
  }

  sombreroSeleccionador(texto);
});

classDefense.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");

  for (input in inputs) {
    if (inputs[input].value == "") {
      alert("Campos obligatorios");
      return false;
    }
  }
  if (estudianteHogwarts.nombre !== "") {
    ArtesOscuras();
    return;
  }
  validar();
  ArtesOscuras();
  botonMostrar();
});

classPociones.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");

  for (input in inputs) {
    if (inputs[input].value == "") {
      alert("Campos obligatorios");
      return false;
    }
  }
  pociones();
  botonMostrar();
});

// imprimir mensaje Voldemort

function imprimirVoldemort() {
  botonAgregar.style.display = "none";

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
    "width: 200px;height: 250px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);

  setTimeout(() => {
    mensajeInicial();
  }, 4000);
}

function createStudent() {
  estudianteHogwarts = {
    nombre: nombreEstudiante.value,
    edad: edadEstudiante.value,
    padres: padresSi.checked ? "Si" : "No",
    sexo: sexo_femenino.checked ? "femenino" : "masculino",
  };

  const infoEstudiante = document.querySelector(".info-estudiante");

  let nombre = document.createElement("h5");
  nombre.textContent = `Nombre: ${estudianteHogwarts.nombre}`;
  nombre.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(nombre);

  let edad = document.createElement("h5");
  edad.textContent = `Edad: ${estudianteHogwarts.edad}`;
  edad.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(edad);

  let padres = document.createElement("h5");
  padres.textContent = `Padres: ${estudianteHogwarts.padres}`;
  padres.setAttribute("style", "font-size:20px; font-weigth:bold");
  infoEstudiante.appendChild(padres);

  let imgSexo = document.createElement("img");
  imgSexo.textContent = `${
    estudianteHogwarts.sexo === "femenino"
      ? (imgSexo.src = "./media/mujer.png")
      : (imgSexo.src = "./media/hombre.png")
  }`;
  imgSexo.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%;  overflow: hidden; bottom: -30px; left: 190px;"
  );
  infoEstudiante.appendChild(imgSexo);
}

// SOMBRERO SELECCIONADOR
function sombreroSeleccionador(texto) {
  img.src = "media/hat.png";
  img.style =
    "width: 200px;height: 350px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
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

function transformaciones() {
  mensaje.innerHTML = `Estás en la clase de Transformaciones 
  <br>del ${clasesyProfesores[0].clase} de las ${clasesyProfesores[0].horario}`;
  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";
  img.src = "./media/Slughorn.png";
  img.style =
    "width: 200px;height: 250px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);
  let flagTransformacion = true;
  let boggartPresente = true;

  if (boggartPresente) {
    setTimeout(() => {
      mensaje.innerHTML = `En el aula hay un boggart presente`;
      mensaje.innerHTML += `Te preparas para hacer el hechizo Riddikulus sobre el!`;
      img.src = "./media/boggart.png";
      img.style =
        "width: 200px;height: 350px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
      imagen.appendChild(img);
    }, 2000);

    setTimeout(() => {
      do {
        mensaje.innerHTML = `Conjurando Riddikulus`;
        const transformacion = Number(Math.floor(Math.random() * 2 + 1));

        mensaje.innerHTML += `Intentando hacer el hechizo Riddikulus... sobre el boggart
        
                `;
        if (transformacion == 1) {
          mensaje.innerHTML = `Logras hacer perfectamente el hechizo
                  <br>
                  riddikulus sobre el boggart
        
                  `;

          tiposTransformaciones.riddikulus += "Ha sido usado riddikulus";
          mensaje.innerHTML += `El boggart cambia de forma  
          <br>ha sido derrotado!`;
          flagTransformacion = false;
          tiposTransformaciones.boggarts = "Ha sido derrotado.";
        }
      } while (flagTransformacion);
    }, 5000);
  } else {
    alert(`El boggart no esta presente`);
  }
}

function ArtesOscuras() {
  mensaje.innerHTML = "";
  mensaje.innerHTML = `Estas en la clase de Defensa contra artes Oscuras
  
  del ${clasesyProfesores[4].clase} de las ${clasesyProfesores[4].horario}`;
  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";

  img.src = "media/snape.png";
  img.style =
    "width: 200px;height: 250px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);

  if (!estudianteHogwarts.animal) {
    generarPatronus();
  }

  function generarPatronus() {
    const randomPatronus = Number(
      Math.floor(
        Math.random() * defensaContraArtesOscuras.animalPatronus.length
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

  //dementor invocation
  setTimeout(() => {
    dementor();
  }, 2000);

  function dementor() {
    if (estudianteHogwarts.animal !== "") {
      alert("Ha aparecido un Dementor!!!!");
      mensaje.innerHTML = `Tu ${estudianteHogwarts.animal} lucha fuertemente con el dementor 
      
      y logra que se aleje despues de un gran rayo de luz.`;
    } else {
      mensaje.innerHTML = `Has sido absorbido por el dementor y 
      eres llevado directamente a la enfermeria!`;
    }
  }
}

const btnEstudiante = document.querySelector("#estudiantes");
btnEstudiante.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "estudiantes.html";
});

function pociones() {
  const tiempoRandom = Number(Math.floor(Math.random() * 10));
  if (tiempoRandom <= clasePociones.ingredientes.recuperacion) {
    mensaje.innerHTML = `
      <p>Fracasó la poción y explotó 😒💣🤢</p>
    `;
    setTimeout(() => {
      mensaje.innerHTML = `
      <p>Te teletrasportas magicamente a ${clasesyProfesores[5].clase}</p>
    `;

      animalesMagicos();
    }, 3000);
  } else
    mensaje.innerHTML = `
  <p>LILIANA: Que bonita poción has creado!! me impresiona tu talento para las pocimas <3 </p>
`;
  mensaje.style =
    "margin: 70px 15px 15px;font-size: 30px;color: #fff;text-shadow: 1px 1px 20px #000;";

  img.src = "media/Macgonagall.png";
  img.style =
    "width: 200px;height: 250px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);
}

function animalesMagicos() {
  mensaje.innerHTML = `
  <p>RUBEUS:¿Qué haces en la clase de Animales Mágicos?</p>
 `;
  mensaje.innerHTML += `
  <p>RUBEUS:Estabas jugando de nuevo con las pocimas de Liliana? ;) guiño guiño</p>
 `;
  img.src = "./media/hagrid.png";
  img.style =
    "width: 200px;height: 350px;position: absolute;bottom: 20px;right: 20px;animation: floating 10s ease-in-out infinite;";
  imagen.appendChild(img);
}

function botonMostrar() {
  if (
    estudianteHogwarts.nombre &&
    estudianteHogwarts.sexo &&
    estudianteHogwarts.animal &&
    estudianteHogwarts.linaje &&
    estudianteHogwarts.edad &&
    estudianteHogwarts.padres &&
    estudianteHogwarts.casa
  ) {
    botonAgregar.style.display = "flex";
  } else {
    botonAgregar.style.display = "none";
    setTimeout(() => {
      alert(
        `La información del estudiante no esta completa, debes completar toda la información para agregar el estudiante`
      );
    }, 1000);
  }
}
