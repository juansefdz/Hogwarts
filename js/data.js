let estudianteHogwarts = {
  nombre: "",
  edad: "",
  padres: undefined, //boolean
  linaje: "",
  casa: "",
  animal: "",
  sexo: "",
};

//casas
const casas = ["Gryffindor", "Hufflepuff", "RavenClaw", "Slytherin"];

const Gryffindor = {
  cualidades: ["Valor", "Fuerza", "Audacia"],
  linaje: ["Mestizo", "Muggle", "Sangre pura"],
};

const Hufflepuff = {
  cualidades: ["Justicia", "Lealtad", "Paciencia"],
  linaje: ["Mestizo", "Muggle"],
};

const RavenClaw = {
  cualidades: ["Creatividad", "Erudición", "Inteligencia"],
  linaje: ["Mestizo", "Muggle", "Sangre pura"],
};

const Slytherin = {
  cualidades: ["Ambición", "Determinación", "Astucia"],
  linaje: ["Sangre pura"],
};

//profesores

const clasesyProfesores = [
  { clase: "Profesor Kevin Slughorn", horario: "08:00AM" },
  { clase: "Profesor Maria Umbridge", horario: "09:00AM" },
  { clase: "Profesora Liliana Macgonagall", horario: "10:00AM" },
  { clase: "Profesora Jackie", horario: "10:00AM" },
  { clase: "Profesor Robbinson Snape", horario: "10:00AM" },
  { clase: "Profesor David Rubeus ", horario: "10:00AM" },
  { clase: "Profesor Ronald malfoy", horario: "10:00AM" },
];

//transformaciones

const tiposTransformaciones = {
  boggarts: "", //si esta transformado o no
  riddikulus: "", // si se hace el hechizo o no
};

const defensaContraArtesOscuras = {
  animalPatronus: [
    "Ciervo",
    "Nutria",
    "Perro",
    "Caballo",
    "Liebre",
    "Ratón",
    "Cisne",
    "Cabra",
    "Fénix",
    "Gato",
    "Jabalí",
    "Lobo",
  ],
};

const clasePociones = {
  profesor: "",
  horario: "",
  ingredientes: {
    crisopos: 2,
    descurainia: 1,
    recuperacion: 5,
  },
};
