

function ellenorzes()
{
    const neve=document.getElementById("nev").value
    const mail=document.getElementById("email").value
    const date=document.getElementById("datum").value
    const neme=document.getElementById("nem").value
    const pass=document.getElementById("jelszo").value
    const bmw=document.getElementById("auto").value

    if (neve.length == 0) 
    {
        alert("Hibás név!");
    }
    if (mail.length != 0 && mail.includes("@",".")) 
    {
        console.log("aha");
    }
    else
    {
        alert("Hibás e-mail cím!")
    }
    if (date.length == 0) 
    {
        alert("Hibás születési dátum!");
    }
    if (neme.length == 0) 
    {
        alert("Hibás adat (neme)!");
    }
    if (pass.length == 0) 
    {
        alert("Hibás jelszó!");
    }
    if (bmw.length == 0) 
    {
        alert("Hibás adat (autó márka)!");
    }
}

function ertekeles()
{
    const ot=document.getElementById("ot")
    const negy=document.getElementById("negy")
    const harom=document.getElementById("harom")
    const ketto=document.getElementById("ketto")
    const egy=document.getElementById("egy")
    
    if(ot.checked)
    {
        alert("Az Ön értékelése: 5")
    }
    if(negy.checked)
    {
        alert("Az Ön értékelése: 4")
    }
    if(harom.checked)
    {
        alert("Az Ön értékelése: 3")
    }
    if(ketto.checked)
    {
        alert("Az Ön értékelése: 2")
    }
    if(egy.checked)
    {
        alert("Az Ön értékelése: 1")
    }
    
}