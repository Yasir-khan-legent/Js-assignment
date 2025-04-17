// function calExpo() {
//     let base = prompt('Enter Base.')
//     let expo = prompt('Enter Exponent.')
//     let ans = 1
//     let i = 1
//     while (i <= expo) {
//         ans = ans * base
//         i++
//     }
//     document.writeln('The result of ' + base + ' raised to the power of ' + expo + ' is: ' + ans)
// }
// calExpo()

// question  # 2


// function areaOfTriangle() {
//     let valueOfA = prompt('Enter the value of A')
//     let valueOfB = prompt('Enter the value of B')
//     let valueOfC = prompt('Enter the value of C')
//     let valueOfS =  calS(valueOfA,valueOfB,valueOfC)
//     let area = valueOfS * (valueOfS - valueOfA) * (valueOfS - valueOfB) * (valueOfS - valueOfC)
//     document.writeln('The area of the triangle is: ' + area)
// }
// function calS(a,b,c) {
//     let s = (a + b + c) / 2
//     return s
// }
// areaOfTriangle()


// let sub1 = +prompt('Enter the marks of subject 1')
// let sub2 = +prompt('Enter the marks of subject 2')
// let sub3 = +prompt('Enter the marks of subject 3')
// function avgAndPer() {
//     let avg = average()
//     let per = percentage()
//     document.writeln('The average of the three subjects is: ' + avg.toFixed(2) + '<br>')
//     document.writeln('The percentage of the three subjects is: ' + per.toFixed(2) + '%<br>')
// }
// function average() {
//     return (sub1 + sub2 + sub3) / 3
// }
// function percentage() {
//     return ((sub1 + sub2 + sub3) / 240) * 100
// }
// avgAndPer()

// question  # 5

function twoVowels() {
    let input = prompt('Enter sentence.')
    let i = 1 
    while (i <= input.length) {
        let flag = false
        
        let word = input[i]
        // Pleases read this application and give me gratuity
        switch (word) {
            case word == 'a':
                
                break;
            case word == 'e':
                
                break;
            case word == 'i':
                
                break;
            case word == 'o':
                
                break;
            case word == 'u':
                
                break;
            case word == ' ':
                flag = true
                break;
        
            default:
                break;
        }
    }
}

// function delVowels() {
//     let i = 0
//     let str = prompt('Enter the string').toLocaleLowerCase()
//     let newStr = ''
//     while (i <= str.length) {
//         let char = str[i]
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ) {
//             // do nothing
//         }
//         else {
//             newStr += char
//         }
//         i++
//         }
//     document.writeln('The new string is: ' + newStr)
// }
// delVowels()


// question  # 7

// function calDistance() {
//     let distance = prompt('Enter the distance in km')
//     let meter = distance * 1000
//     let centimeter = meter * 100
//     let feet = distance * 3280.84
//     let inch = feet * 12
//     document.writeln('The distance in meter is: ' + meter + 'm<br>')
//     document.writeln('The distance in centimeter is: ' + centimeter + 'cm<br>')
//     document.writeln('The distance in feet is: ' + feet + 'ft<br>')
//     document.writeln('The distance in inch is: ' + inch + 'in<br>')
// }
// calDistance()

// function calOvertime() {
//     let hours = +prompt('Enter the hours worked')
//     let rate = 12
//     let paid = hours * rate
//     document.writeln('The overtime pay is: ' + paid)
// }
// calOvertime()

// function calwithdraw() {
//     let input = prompt('Enter the amount to withdraw in hundreds.')
//     let hundreds = Math.floor(input / 100)
//     let fifties = Math.floor((input - (hundreds * 100)) / 50)
//     let tens = Math.floor((input - (hundreds * 100) - (fifties * 50)) / 10)
//     document.writeln("Number of 100 denomination notes: " + hundreds);
//     document.writeln("Number of 50 denomination notes: " + fifties);
//     document.writeln("Number of 10 denomination notes: " + tens);
// }
// calwithdraw()