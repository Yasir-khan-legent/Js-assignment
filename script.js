

function sig(){
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    localStorage.setItem('Full Nmae', name.value)
    localStorage.setItem('Email', email.value)
    localStorage.setItem('Password', password.value)

    location.href = './login.html'
    
}

function login(){
    var lemail = document.getElementById('email2')
    var lpassword = document.getElementById('password2')
    

 var email1 =    localStorage.getItem("Email")
 var password1 = localStorage.getItem("Password")

if(lemail.value == email1 && lpassword.value == password1){
    
    location.href = './welcome.html'
} else{
    alert("Incorrect Email or Password")
}


}

function logout(){
    location.href = './login.html'
}

function deleteAccount(){
    location.href = './index.html'
    localStorage.clear()
}


