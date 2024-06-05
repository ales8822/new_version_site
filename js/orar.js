const lessonTimes = [
  { start: { ora: 8, minute: 0 }, end: { ora: 8, minute: 45 } },
  { start: { ora: 9, minute: 0 }, end: { ora: 9, minute: 45 } },
  { start: { ora: 10, minute: 0 }, end: { ora: 10, minute: 45 } },
  { start: { ora: 11, minute: 0 }, end: { ora: 11, minute: 45 } },
  { start: { ora: 12, minute: 0 }, end: { ora: 12, minute: 45 } },
  { start: { ora: 13, minute: 0 }, end: { ora: 13, minute: 45 } },
  { start: { ora: 14, minute: 0 }, end: { ora: 14, minute: 45 } },
];

var orarClasele = [
  {
    clasa: "I-a",
    nrElevi: 28,
    imagineDiriginte: "./img/img_msg/parinte_1.png",
    numeDiriginte: "Craciun Tatiana",
    orar: {
      Luni: ["Matematica", "Limba Romana", "Limba Romana", "Matematica"],
      Marți: [
        "Limba Romana",
        "Dezvoltarea Personala",
        "Limba Romana",
        "Matematica",
      ],
      Miercuri: [
        "Educatie Moral-spirituala",
        "Limba Romana",
        "Limba Romana",
        "Educatia Tehnologica",
      ],
      Joi: ["Limba Romana", "Limba Romana", "Educatia Plastica", "Matematica"],
      Vineri: ["Matematica", "Matematica", "Educatia Plastica"],
    }, // end orar
  }, // end clasa I-a
  {
    clasa: "II-a",
    nrElevi: 18,
    imagineDiriginte: "./img/img_msg/parinte_2.png",
    numeDiriginte: "Craciun Tatiana",
    orar: {
      Luni: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Marți: ["Limba Romana", "Limba Romana", "Matematica", "Limba Engleza"],
      Miercuri: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Educatia Tehnologica",
      ],
      Joi: [
        "Limba Romana",
        "Educatia pentru Sanatate",
        "Educatia Fizica",
        "Matematica",
      ],
      Vineri: [
        "Matematica",
        "Educatia Fizica",
        "Limba Engleza",
        "Educatia Muzicala",
      ],
    }, // end orar
  },
  {
    clasa: "III-a",
    nrElevi: 18,
    imagineDiriginte: "./img/img_msg/parinte_7.png",
    numeDiriginte: "T",
    orar: {
      Luni: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Educatia pentru Sanatate",
      ],
      Marți: [
        "Matematica",
        "Limba Romana",
        "Istoria",
        "Matematica",
        "Educatia Fizica",
      ],
      Miercuri: [
        "Matematica",
        "Limba Romana",
        "Educatia Plastica",
        "Dezvoltarea Personala",
      ],
      Joi: [
        "Limba Romana",
        "Limba Engleza",
        "Dezvoltarea Personala",
        "Matematica",
      ],
      Vineri: ["Matematica", "Limba Engleza", "Istoria", "Educatia Muzicala"],
    }, // end orar
  }, // end clasa III-a
  {
    clasa: "IV-a",
    nrElevi: 18,
    imagineDiriginte: "./img/img_msg/parinte_6.png",
    numeDiriginte: "Ana Postoronca",
    orar: {
      Luni: [
        "Matematica",
        "Limba Romana",
        "Limba Engleza",
        "Istoria",
        "Educatia Moral-Spirituala",
      ],
      Marți: [
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Educatia Fizica",
        "Dezvoltarea Personala",
      ],
      Miercuri: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Matematica",
      ],
      Joi: ["Limba Engleza", "Istoria", "Educatia Fizica", "Matematica"],
      Vineri: [
        "Matematica",
        "Educatia Fizica",
        "Educatia Plastica",
        "Educatia Tehnologica",
      ],
    }, // end orar
  }, // end clasa IV-a
  {
    clasa: "V-a",
    nrElevi: 28,
    imagineDiriginte: "./img/img_msg/parinte_3.png",
    numeDiriginte: "Pascari Raisa",
    orar: {
      Luni: [
        "Stiinta",
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Dezvoltare Personala",
        "Limba Engleza",
      ],
      Marți: [
        "Limba Romana",
        "Limba Romana",
        "Istoria",
        "Matematica",
        "Limba Franceza",
        "Educatia Tehnologica",
      ],
      Miercuri: [
        "Matematica",
        "Matematica",
        "Limba Romana",
        "Limba Franceza",
        "Educatia Fizica",
        "Limba Romana",
        "test1 leson",
        "test2 leson",
        "test3 leson",
        "test4 leson",
      ],
      Joi: [
        "Limba Romana",
        "Limba Engleza",
        "Stiinta",
        "Educatia Tehnologica",
        "Educatia Plastica",
      ],
      Vineri: [
        "Geografia",
        "Educatia Fizica",
        "Matematica",
        "Educatia Muzicala",
      ],
    }, // end orar
  }, // end clasa V-a
  {
    clasa: "VI-a",
    nrElevi: 20,
    imagineDiriginte: "./img/img_msg/parinte_4.png",
    numeDiriginte: "Pascari Raisa",
    orar: {
      Luni: [
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Biologie",
        "Limba Engleza",
        "Educatia Plastica",
      ],
      Marți: [
        "Matematica",
        "Limba Romana",
        "Istoria",
        "Educatia pentru Societate",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Miercuri: [
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Limba Engleza",
        "Biologie",
      ],
      Joi: [
        "Limba Romana",
        "Limba Engleza",
        "Matematica",
        "Limba Romana",
        "Matematica",
        "Educatia Fizica",
      ],
      Vineri: [
        "Geografia",
        "Limba Franceza",
        "Educatia Fizica",
        "Informatica",
        "Educatia Muzicala",
      ],
    }, // end orar
  }, // end clasa I-b
  {
    clasa: "VII-a",
    nrElevi: 17,
    imagineDiriginte: "./img/img_msg/parinte_5.png",
    numeDiriginte: "Pascari Raisa",
    orar: {
      Luni: [
        "Biologie",
        "Chimie",
        "Limba Franceza",
        "Matematica",
        "Istoria",
        "Educatia Tehnologica",
        "Educatia Plastica",
      ],
      Marți: [
        "Fizica",
        "Educatia Fizica",
        "Limba Romana",
        "Limba Romana",
        "Istoria",
        "Educatia pentru Societate",
      ],
      Miercuri: [
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Limba Engleza",
        "Dezvoltare Personala",
        "Biologie",
      ],
      Joi: [
        "Matematica",
        "Limba Engleza",
        "Limba Romana",
        "Matematica",
        "Informatica",
      ],
      Vineri: [
        "Fizica",
        "Educatia Fizica",
        "Geografia",
        "Limba Franceza",
        "Educatia Muzicala",
        "Programare Web",
      ],
      Sâmbătă: [
        "Fizica",
        "Educatia Fizica test",
        "Geografia test",
        "Limba Franceza test",
        "Educatia Muzicala test",
        "Programare Web test",
      ],
    }, // end orar
  }, // end clasa I-b
  {
    clasa: "VIII-a",
    nrElevi: 20,
    imagineDiriginte: "./img/img_msg/parinte_6.png",
    numeDiriginte: "Pascari Raisa",
    orar: {
      Luni: [
        "Dezvoltarea Personala",
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Marți: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Limba Engleza",
        "Dezvoltarea Personala",
        "Educatia Tehnologica",
      ],
      Miercuri: [
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Matematica",
        "Matematica",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Joi: [
        "Limba Romana",
        "Limba Engleza",
        "Dezvoltarea Personala",
        "Matematica",
        "Matematica",
        "Educatia Tehnologica",
        "Limba Romana",
      ],
      Vineri: [
        "Dezvoltarea Personala",
        "Limba Romana",
        "Matematica",
        "Limba Romana",
        "Limba Engleza",
        "Educatia Tehnologica",
        "Matematica",
      ],
    }, // end orar
  }, // end clasa I-b
  {
    clasa: "IX-a",
    nrElevi: 20,
    imagineDiriginte: "./img/img_msg/parinte_6.png",
    numeDiriginte: "Pascari Raisa",
    orar: {
      Luni: [
        "Dezvoltarea Personala",
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Marți: [
        "Matematica",
        "Limba Romana",
        "Limba Romana",
        "Matematica",
        "Limba Engleza",
        "Dezvoltarea Personala",
        "Educatia Tehnologica",
      ],
      Miercuri: [
        "Limba Romana",
        "Limba Romana",
        "Dezvoltarea Personala",
        "Matematica",
        "Matematica",
        "Limba Engleza",
        "Educatia Tehnologica",
      ],
      Joi: [
        "Limba Romana",
        "Limba Engleza",
        "Dezvoltarea Personala",
        "Matematica",
        "Matematica",
        "Educatia Tehnologica",
        "Limba Romana",
      ],
      Vineri: [
        "Dezvoltarea Personala",
        "Limba Romana",
        "Matematica",
        "Limba Romana",
        "Limba Engleza",
        "Educatia Tehnologica",
        "Matematica",
      ],
    }, // end orar
  }, // end clasa I-b
];
