const adatok = []

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gomb").addEventListener('click', objektum)
})

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

function email()
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

function objektum()
{
    const aha = document.forms["aha"]
    const felhasznalonev=aha["felhasznalonev"].value
    const jelszo1=aha["jelszo1"].value
    const jelszo2=aha["jelszo2"].value
    const email=aha["email"].value
    const datum=aha["datum"].value

    let minden=true

    if(felhasznalonev.length==0)
    {
        minden=false
    }
    if(jelszo1.length==0)
    {
        minden=false
    }
    if(jelszo2.length==0)
    {
        minden=false
    }
    if(email.length==0)
    {
        minden=false
    }
    if(datum.length==0)
    {
        minden=false
    }

    if (minden) {
        const rastinger={
            felhasznalonev: felhasznalonev,
            jelszo1: jelszo1,
            jelszo2: jelszo2,
            email: email,
            datum: datum
        }
        adatok.push(rastinger)
        console.log(adatok)
    }
}