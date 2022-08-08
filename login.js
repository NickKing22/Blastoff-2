function validate()
    {
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        var info = user + " ";

        if (user == "Nicholas" && pass == "Enter") 
            {
                alert("Access granted! Welcome commander " +info, "!");
                window.location = "blastoff2.html";
            }
        else
            {
                document.getElementById("error").innerHTML = "The Username or Password is incorrect, please try again."
            }



    }