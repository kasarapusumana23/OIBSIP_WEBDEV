function registerUser(){

    let email =
    document.getElementById(
        "registerEmail"
    ).value;

    let password =
    document.getElementById(
        "registerPassword"
    ).value;

    if(email === "" || password === ""){

        alert(
            "Please fill all fields"
        );

        return;
    }

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "password",
        password
    );

    alert(
        "Registration Successful!"
    );

    window.location.href =
    "index.html";
}

function loginUser(){

    let email =
    document.getElementById(
        "loginEmail"
    ).value;

    let password =
    document.getElementById(
        "loginPassword"
    ).value;

    let storedEmail =
    localStorage.getItem(
        "email"
    );

    let storedPassword =
    localStorage.getItem(
        "password"
    );

    if(
        email === storedEmail &&
        password === storedPassword
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
        "dashboard.html";
    }

    else{

        alert(
            "Invalid Credentials"
        );
    }
}

if(
    window.location.pathname.includes(
        "dashboard.html"
    )
){

    if(
        localStorage.getItem(
            "loggedIn"
        ) !== "true"
    ){

        window.location.href =
        "index.html";
    }

    document.addEventListener(
        "DOMContentLoaded",
        ()=>{

            document.getElementById(
                "userEmail"
            ).innerText =
            localStorage.getItem(
                "email"
            );
        }
    );
}

function logoutUser(){

    localStorage.removeItem(
        "loggedIn"
    );

    window.location.href =
    "index.html";
}