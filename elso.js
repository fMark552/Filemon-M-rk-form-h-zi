const nagyb=document.getElementById("nagybetu")
const kisb=document.getElementById("kisbetu")
const oda=document.getElementById("ide")


function nagy()
{
    let input1 = document.getElementById("szo").value;
    oda.innerHTML=input1.toUpperCase()

    if(input1=" ")
    {
        alert("Nem írt be semmit!")
    }
}

function kis()
{
    let input2 = document.getElementById("szo").value;
    oda.innerHTML=input2.toLowerCase()

    if(input2=" ")
    {
        alert("Nem írt be semmit!")
    }
}
