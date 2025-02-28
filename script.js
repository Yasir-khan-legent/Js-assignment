var date = new Date().getTime()
var dob = new Date(prompt("Ente Date of Birth")).getTime()
var age = Math.floor((date-dob)/(1000*60*60*24*365))
document.write("Your age is" + age)