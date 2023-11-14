// oppgave 1
let bilfirma = {
  firmaNavn: "Ditt Bilfirma",
  antallAnsatte: 50,
  bilListe: ["Bil1", "Bil2", "Bil3"],
  betaltSkatt: 1000000,
  nettside: "www.dittbilfirma.com",
  skrivUtInfo: function () {
    console.log(`Firma: ${this.firmaNavn}`);
    console.log(`Antall ansatte: ${this.antallAnsatte}`);
    console.log(`Bil Liste: ${this.bilListe.join(", ")}`);
    console.log(`Betalt skatt: ${this.betaltSkatt}`);
    console.log(`Nettside: ${this.nettside}`);
  },
  // oppgave 6
  status: true,
};

// oppgave 2
bilfirma.firmaNavn = "Nytt Bilfirma";

// oppgave 3
bilfirma.bilListe.push("Ny Bil");

// oppgave 4
bilfirma.bilListe.shift();

// oppgave 5
delete bilfirma.nettside;

// oppgave 7
for (let i = 0; i < bilfirma.bilListe.length; i++) {
  console.log(bilfirma.bilListe[i]);
}

// oppgave 8
for (let key in bilfirma) {
  console.log(key);
}

// oppgave 9
for (let key in bilfirma) {
  console.log(`${key}: ${bilfirma[key]}`);
}

// oppgave 10
function getFirstElement() {
  return bilfirma.bilListe[0];
}

// oppgave 11
function getLastElement() {
  return bilfirma.bilListe[bilfirma.bilListe.length - 1];
}

// oppgave 12
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: false,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// vis bøker som ikke er lest
for (let i = 0; i < library.length; i++) {
  if (!library[i].readingStatus) {
    console.log(
      `Du har ikke lest: ${library[i].title} av ${library[i].author}`
    );
  }
}
