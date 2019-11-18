// GETTING ALL INPUT TEXT OBJECTS
    var username = document.forms["vform"]["username"];
    var email = document.forms["vform"]["email"];
    var password = document.forms["vform"]["password"];
    var password_confirmation = document.forms["vform"]["password_confirmation"];

    // GETTING ALL ERROR DISPLAY OBJECTS
    var name_error = document.getElementById("name_error");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");

    // SETTING ALL EVENT LISTENERS
    username.addEventListener("blur", nameVerify, true);
    email.addEventListener("blur", emailVerify, true);
    password.addEventListener("blur", passwordVerify, true);

    // VALIDATION FUNCTION

    function Validate()
    // username validation
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var numero_errores = 0;
        
        if (username.value == "") 
        {
            username.style.border = "1px solid red";
            name_error.textContent = "El Username es necesario";
            username.focus();
            numero_errores++;
            // console.log("Falta Username: "+numero_errores);
        }

        // email validation
        if (email.value == "") 
        {
            email.style.border = "1px solid red";
            email_error.textContent = "El Email es necesario";
            email.focus();
            numero_errores++;
            // console.log("Falta email: "+numero_errores);

        }else if(!mailformat.test(email.value)){
            email_error.textContent = "El email no cumple el formato correcto";
        }
        
        // password validation
        if (password.value == "") 
        {
            password.style.border = "1px solid red";
            password_error.textContent = "El Password es necesario";
            password.focus();
            numero_errores++;
            // console.log("Falta Password: "+numero_errores);
        }

        // check if the two password match
        if(password.value != password_confirmation.value)
        {
            password.style.border = "1px solid red";
            password_confirmation.style.border = "1px solid red";
            password_error.innerHTML = "Los Password no son iguales";
            numero_errores++;
            console.log("Password diferente o es diferente: "+numero_errores);
        }

        if(numero_errores>0)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }

    // EVENT HANDLER FUNCTIONS

    function nameVerify()
    {
        if(username.value !="")
        {
            username.style.border = "1px solid #5E6E66";
            name_error.innerHTML = "";
            return true;
        }
    }

    function emailVerify()
    {
        if(email.value !="")
        {
            email.style.border = "1px solid #5E6E66";
            email_error.innerHTML = "";
            return true;
        }
    }

    function passwordVerify()
    {
        if(password.value !="")
        {
            password.style.border = "1px solid #5E6E66";
            password_error.innerHTML = "";
            return true;
        }
    }