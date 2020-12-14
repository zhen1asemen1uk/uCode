var team = prompt('Введіть назву team: Avengers, S.H.I.E.L.D., Justice League Of America або Teen Titans.'),
    universe = prompt('Введіть назву universe: Marvel або DC Comics.'),
    race = prompt('Введіть назву race: human або kryptonian.'),
    eyeColor = prompt('Введіть eyeColor: green або blue.'),
    hairColor = prompt('Введіть hairColor: lightBrown, green або black.');
    if (team == "Avengers" ||
        team == "S.H.I.E.L.D." &&
        universe == "Marvel" &&
        race == "human" &&
        eyeColor == "green" &&
        hairColor == "lightBrown" ||
        hairColor == "green") {
        alert ("This is Black Window!");
    } else if (team == "Justice League Of America" ||
        team == "Teen Titans" &&
        universe == "DC Comics" &&
        race == "human" ||
        race == "kryptonian" &&
        eyeColor == "blue" &&
        hairColor == "black") {
        alert ("This is a Superman or Robin!");
    } else {
        alert ("Didn't recognize!");
    }