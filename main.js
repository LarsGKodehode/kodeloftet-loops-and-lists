// Løkker brukes for å kjøre en blokk med kode flere ganger

// Ignorer de ytterste curley braces de brukes kun here for å
// begrense hvor variablene er tilgjengelig, du kommer i hovedsak
// kun til å bruke de i forbindelse med funksjoner og løkker

{
  // For løkken er den mest brukte gjennom alle programmerings språk
  for (let i = 0; i < 10; i++) {
    console.log("Round: " + i);
  }
}

// Det eksisterer flere alternativer som kan være greiere å bruke til
// enkelte ting, de baserer seg på de samme prinsippene

{
  // While løkken
  let iteration = 0;

  while (iteration < 10) {
    console.log("Round number: " + iteration);
    iteration = iteration + 1;
  }
}

{
  // Do while
  let iteration = 0;
  do {
    console.log("round number: " + iteration);
    iteration = iteration + 1;
  } while (iteration < 10);
}

{
  // Data strukturen liste (Array)
  let myArray = ["Foo", "Bar", "Fiz", "Buz"];

  // Print hele listen
  console.log(myArray);

  // Print et element
  console.log(myArray[0]);

  // Kombiner med en løkke variant for å gjøre noe med
  // Hvert enkelt element i listen

  for (
    let i = 0; // Hold rede på hvor mange iterasjoner vi har gjort
    i < myArray.length; // Bruk lengden på listen
    i++ // Øke telleren med 1
  ) {
    console.log("Element: " + i + "\tContains: " + myArray[i]);
  }

  // En løkke beregnet for å gjøre noe per element i en listene
  // For .. of
  for (const element of myArray) {
    console.log("Current Element = " + element);
  }
}

// Litt mer praktisk bruk av løkker og data strukturer
let list = document.querySelector("#teachers");

let peoples = ["Lars", "Julie", "Joe", "Endre", "Stefan"];

for (const person of peoples) {
  let newCard = createPersonCard(person);
  list.append(newCard);
}

// Funksjon for å lage nye person kort
function createPersonCard(name) {
  let newListItem = document.createElement("li");

  newListItem.textContent = name;

  return newListItem;
}

/**
 * .querySelectorAll("li")
 *
 * Hvis du hovrer over peopleElements så ser du at den er av
 * type: NodeListOf<HTMLLIElement>
 * Dette er noe som ligner på en liste (Array), men er ikke helt det
 * samme. Du kan se på denne lenken for å få mer detaljer
 *
 * [MDN NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
 *
 * Den er satt opp slik at vi kan bruke den i en for løkke, selv om
 * akkurat hvordan dette er gjort går ut over det vi skal igjennom.
 */
let peopleElements = document.querySelectorAll("li");
console.log(peopleElements);

// Legg til en klasse på hvert element i listen
for (const element of peopleElements) {
  element.className = "people-card";
}
