let texthidden =document.getElementById("texthidden");
let readmore =document.getElementById("readmore");
let read =document.getElementById("read");
let text =document.getElementById("text");

readmore.onclick=()=>{
    if (texthidden.style.display==="none") {
        texthidden.style.display="inline";
        readmore.textContent="Read Less"
    }
    else{
        texthidden.style.display="none";
        readmore.textContent="Read More"
    }
}

read.onclick=()=>{
    if (text.style.display==="none") {
        text.style.display="inline";
        read.textContent="Read Less"
    }
    else{
        text.style.display="none";
        read.textContent="Read More"
    }
}