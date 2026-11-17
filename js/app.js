"use strict"
/*
let firstName = "Jonas";
let email = "jonas@gmail.com"
let age = 45;
let interests = ["Fishing", "Drifting", "Cooking"];
const TAX_RATE = 1.21;
let dog = { //object 
    id: "1",
    "breed": "Koli",
    "name": "Bobikas"
}


console.log("Vardas:" + firstName)
console.log("Gmailas: " + email);
console.log("Amzius: " + age);
console.log("Pomegiu skaiciu:" + interests.length)
console.log("Hobei: ");


for (let i = 0; i < interests.length; i++)
    {
        console.log(interests[i])
    }
for (let interest of interests)
    {
        console.log(interest);
    }
for (let interest in interests)
    {
        console.log(interests[interest]);
    }

console.log("Suo: ");
for (let value in dog)
    {
        console.log(`Atributas: ${value}. Reiksme: ${dog[value]}`)
    }

console.log(`Vartotojas: ${firstName}. Amzius: ${age * 2}`)

let sum = 10;
function showSum(numberOne, numberTwo)
{
    sum = numberOne + numberTwo;
    console.log(sum)
}

showSum(13, 14)

let user = "online";

let age = 18;

let isOnline = user == "online"

console.log(`Ar vartotojas prisijunges? ${isOnline}`)

let hasAccess = (age >= 18) ? "Has access" : "No access"; //ternary operator

console.log(hasAccess)

let price = 12.56;
let firstName = "Andrius"
let items = ["Phone", "Tablet", "Phone"]

console.log(`Duomenu tipas: ${typeof(age)}`)
console.log(`Duomenu tipas: ${typeof(price)}`)
console.log(`Duomenu tipas: ${typeof(firstName)}`)
console.log(`Duomenu tipas: ${typeof(items)}`)

console.log(firstName.length)

let text = "123 puslapiai"; //String ParseInt numeta texta 
console.log(`Duomenu tipas: ${typeof(text)}`);
text = parseInt(text);
console.log(text)
console.log(`Duomenu tipas: ${typeof(text)}`);

let title = "Matrix";
let subtitle = "Best movie";

if(title)
    {
        console.log(title)
    }
else
    {
        console.log("Title is not set");
    }

if(subtitle)
    {
        console.log(subtitle);
    }
    else
        {
            console.log("subtitle not set")
        }

    
let item = "Tablet";
let price = 800.50;
let count = 5;

price *= 2;

console.log(price)


let firstNumber = "2";
let secondNumber = 2;

if(firstNumber === secondNumber)
    {
        console.log("sutampta")
    }
else
    {
        console.log("nesutampta")
    }



let students = ["Ieva", "Kristina", "Ana", "Gabija"];

for(let i = 0; i < students.length; i++)
    {
        if(students[i] == "Ana")
            {
                console.log(students[i]);
                break;
            }
            console.log(i);
    }

    */

// function SleepIn(weekday, vacation)
// {
//     if(!weekday || vacation)
//         {
//             return true;
//         }
// }

// console.log(SleepIn(false, false));
// console.log(SleepIn(true, false));
// console.log(SleepIn(false, true));



// setTimeout(function ()
// {
//     alert("reklama");
// }, 3000);

// const countAverage = (...grades) =>
//     {
//         //sudeti
//         let sum = 0

//         for(let i = 0; i < grades.length; i++)
//             {
//                 sum += grades[i]
//             }
//         //padalinti is pazymiu skaiciuas
//         return Math.round(sum / grades.length)
//     }

// console.log(countAverage(10,7,8,9,8,7))

// const findNumber = (target, ...number) =>
//     {
//         console.log(number)
//         for(let i = 0; i < number.length; ++i)
//             {
//                 if(target === number[i])
//                     {
//                         return number.indexOf(target);
//                         break;
//                     }
//                 else
//                     {
//                         return -1
//                     }
//             }
//     } 
//     console.log(findNumber(27, ))



// const countWordsStartingWtih = (letter, ...words) =>
//     {
//         let sum = 0
//         for(let i = 0; i < words.length; i++)
//             {
//                 console.log(words[i][0].toLowerCase())
//                 if(words[i][0].toLowerCase() === letter)
//                     {
//                         sum ++
//                         continue;
//                     }
                    
//                 }
//                 return sum
//     }
//     console.log(countWordsStartingWtih("j", "Java", "javascript", "Python", "JSON", "HTML"));
    

// const countEvenNumbers = (...numbers) =>
// {
//     let sum = 0
    
//     for(let i = 0; i < numbers.length; i++)
//         {
//             if(numbers[i] % 2 === 0)
//                 {
//                     sum ++
//                 }
//         }
//     return sum
// }

// console.log(countEvenNumbers(3, 8, 12, 5, 7, 20))

// const getRandom = (max) =>
//     {
//         return Math.floor(Math.random() * max)
//     }
// console.log(getRandom(100)) //Math 

// const getDate = () =>
//     {
//         const date = new Date();

//         const newDate = new Date(date).setFullYear(2027);
//         return new Date(newDate).getUTCFullYear() // grazinam date objekto date
//     }

// console.log(getDate())  

// const checkName = (name, names) =>
//     {
//         if(names.includes(name))
//             {
//                 return `Surasta: ${name}`;
//             }
//         else
//             {
//                 return "Not found"
//             }
//     }  

//     console.log(checkName("Justina", ["Rokas", "Martynas", "Matas", "Justina"]));


// const toArrConverter = (text) =>
//     {
//         return text.split(":");
//     }

// const toStringConverter = (array) =>
//     {
//         return array.join(",")
//     }

//     console.log(toArrConverter("Labas: rytas: suraitytas"))
//     console.log(toStringConverter(["Andrius", "Ieva"]))

const countWordsContaining = (searchText, ...words) =>
    {
        let count = 0;

        for(let i = 0; i < words.length; i++)
            {
                if(words[i].toLowerCase().includes(searchText))
                {
                    count ++
                }
            }
            return count
            
    }

console.log(countWordsContaining("script", "JavaScript", "Python", "Java", "TypeScript"));


// const findImageFiles = (...fileNames) =>
//     {
//         for(let i = 0; i < fileNames.length; i++)
//             {
//                 if(fileNames[i].endsWith(".png") || fileNames[i].endsWith(".jpg"))
//                 {
//                     return fileNames
//                 }
//             }
//     }

//     console.log(findImageFiles(["logo.PNG", "notes.txt", "photo.jpg", "image.svg"]))


const findEmailsFromDomain = (domain, ...emails) =>
    {
        for(let i = 0; i < emails.length; i++)
            {
                if(emails[i])
            }
    }