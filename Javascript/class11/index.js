var urduPoets = [
    "Mir Taqi Mir",
    "Mirza Ghalib",
    "Allama Iqbal",
    "Faiz Ahmed Faiz",
    "Ahmed Faraz",
    "Jaun Elia",
    "Parveen Shakir",
    "Habib Jalib",
    "Nasir Kazmi",
    "Muneer Niazi",
    "Josh Malihabadi",
    "Akbar Allahabadi",
    "Daagh Dehlvi",
    "Jigar Moradabadi",
    "Firaq Gorakhpuri",
    "Majrooh Sultanpuri",
    "Sahir Ludhianvi",
    "Noon Meem Rashid",
    "Meeraji",
    "Wasi Shah",
    "Amjad Islam Amjad",
    "Kishwar Naheed",
    "Ahmad Nadeem Qasmi",
    "Mohsin Naqvi",
    "Ibn-e-Insha"
];



var getValueFromUser = prompt("enter poet name")

// console.log(getValueFromUser)

var isNotFound = false

for (var index = 0; index < urduPoets.length; index++) {
    if (getValueFromUser.toLowerCase() === urduPoets[index].toLowerCase()) {
        console.log("poet found", urduPoets[index].toLowerCase())
        console.log(index)
        isNotFound = false
        break;
    } else {
        isNotFound = true
    }
}


if(isNotFound){
    console.log("Poet Not Found")
}
