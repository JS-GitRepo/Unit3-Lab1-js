const firstName = "Jake";
const age = "25";
const birthday = "string";
const pineapplePizza = false;
const lifeEvent = [
    { BirthEvent : "I was born in Troy, Michigan."},
    { CollegeEvent : "I went to Hope College"},
    { OlympicsEvent : "I went to Junior Olympics when I was 10 years old."},
    { BootcampEvent : "I'm a graduate of a Grand Circus bootcamp."},
];

if (pineapplePizza === true) {
    console.log(`My name is ${firstName} and I like pineapples on pizza. I am currenty ${age} years old and my brithday is on ${birthday}.`);
} else {
    console.log(`My name is ${firstName} and I'm not into pineapples on pizza. I am currenty ${age} years old and my brithday is on ${birthday}.`);
}

for (let i=0; i<=lifeEvent.length; i++) {
    console.log(lifeEvent[i]);
}

let counter = 0;

while (true) {
    let randomNumber = Math.floor((Math.random()*10)+1);
    if (randomNumber !== 5) {
        counter ++;
        console.log(`${randomNumber} does not equal 5.`)
    } else {
        counter ++;
        console.log(`5 === 5. It took ${counter} iteration to randomly generate number 5.`);
        break;
    }
}