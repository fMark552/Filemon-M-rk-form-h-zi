function aha()
{
    let jelszo1=document.getElementById("jelszo1").value;
    let jelszo2=document.getElementById("jelszo2").value;

    if (jelszo1!=jelszo2)
{
    alert("A jelszavak nem egyeznek!")
}
if(jelszo1.length<5 )
{
    alert("A jelszónak legalább 5 karakter hosszúnak kell lennie!")
}
if(jelszo2.length<5 )
{
    alert("Az ellenörző jelszónak is legalább 5 karakter hosszúnak kell lennie!")
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


