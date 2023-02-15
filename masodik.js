function felhasznalonev()
{
    let nev=document.getElementById("felhasznalonev").value

    if (nev.length <5 || nev.length >16)
    {
        alert("A felhasználónévnek minimum 5 és maximum 16 karakter hosszúnak kell lennie!")
    }
}

function jelszo()
{
    let jelszo1=document.getElementById("jelszo1").value
    let jelszo2=document.getElementById("jelszo1").value

    if(jelszo1!=jelszo2)
    {
        alert("A két jelszó nem egyezik!")
    }

    if(jelszo1==jelszo2)
    {
        const kisbetu = /[a-z]/g
        if(jelszo1.match(kisbetu)) 
        {  
            console.log("aha")
        }
        else
        {
            alert("A jelszónak tartalmaznia kell kisbetűt is.")
        }

        const nagybetu = /[A-Z]/g
        if(jelszo1.match(nagybetu)) 
        {  
            console.log("aha")
        }
        else 
        {
            alert("A jelszónak tartalmaznia kell NAGYBETŰT is.")
        }

        const szam = /[0-9]/g
        if(jelszo1.match(szam)) 
        {  
            console.log("aha")
        }
        else 
        {
            alert("A jelszónak tartalmaznia kell számot is.")
        }

        const speckar = /[!@#$%^&*]/g
        if(jelszo1.match(speckar))
        {
            console.log("aha")
        }
        else
        {
            alert("A jelszónak tartalmaznia kell speciális karaktert is!")
        }

        if(jelszo1.length<5)
        {
            alert("A jelszónak legalább 5 karakter hosszúnak kell lennie!")
        }
    }
}

function mail()
{
    let mail=document.getElementById("email").value

    if (mail.includes("@","."))
    {
        console.log("aha")
    }
    else
    {
        alert("Hibás e-mail cím!")
    }
}






