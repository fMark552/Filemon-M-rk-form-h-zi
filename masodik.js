function jelszo()
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

if (jelszo1==jelszo2)
{
    if (jelszo1.includes("A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P"|| "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z"))
    {
        console.log("aha")
    }
    else
    {
        alert("A jelszónak tartalmaznia kell nagybetűt is!")
    }

    if (jelszo1.includes("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p"|| "q" || "r" || "s" || "t" || "i" || "v" || "w" || "x" || "y" || "z"))
    {
        console.log("aha")
    }
    else
    {
        alert("A jelszónak tartalmaznia kell kisbetűt is!")
    }

    if (jelszo1.includes("0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"))
    {
        console.log("aha")
    }
    else
    {
        alert("A jelszónak tartalmaznia kell számot is!")
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


