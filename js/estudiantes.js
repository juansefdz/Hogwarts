const estudentsContainer = document.querySelector(".estudents");
const grupoGryffindor = document.querySelector("#gryffindor");
const grupoRavenClaw = document.querySelector("#ravenclaw");
const grupoSlytherin = document.querySelector("#slytherin");
const grupoHufflepuff = document.querySelector("#hufflepuff");
const todosEstudiantes = document.querySelector("#todas-casas");

/*funciones*/
function mostrarEstudiantes(estudianteHogwarts) {
  estudentsContainer.innerHTML = "";
  estudianteHogwarts.forEach((estudiante) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-zone">
      <h3 class="nombre">${estudiante.nombre}</h3>
        
        <p>Edad: ${estudiante.edad}</p>
        <p>Linaje: ${estudiante.linaje}</p>
        <p>Casa: ${estudiante.casa}</p>
        <p>Patronus: ${estudiante.animal}</p>
      <div>
      
      </div>
                
      </div>
    `;
    estudentsContainer.appendChild(card);
  });
}

todosEstudiantes.addEventListener("click", () => {

  mostrarEstudiantes(estudianteHogwarts);
});

grupoGryffindor.addEventListener("click", () => {
  const estudiantesGryffindor = estudianteHogwarts.filter(
    (estudiante) => estudiante.casa === "gryffindor"
  );
  mostrarEstudiantes(estudiantesGryffindor);
});

grupoRavenClaw.addEventListener("click", () => {
  const estudiantesRavenClaw = estudianteHogwarts.filter(
    (estudiante) => estudiante.casa === "ravenclaw"
  );
  mostrarEstudiantes(estudiantesRavenClaw);
});

grupoSlytherin.addEventListener("click", () => {
  const estudiantesSlytherin = estudianteHogwarts.filter(
    (estudiante) => estudiante.casa === "slythering"
  );
  mostrarEstudiantes(estudiantesSlytherin);
});

grupoHufflepuff.addEventListener("click", () => {
  const estudiantesHufflepuff = estudianteHogwarts.filter(
    (estudiante) => estudiante.casa === "hufflepuff"
  );
  mostrarEstudiantes(estudiantesHufflepuff);
});

// Muestra todos los estudiantes al cargar la página
mostrarEstudiantes(estudianteHogwarts);
