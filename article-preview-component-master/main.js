let btnShare = document.getElementById('btnShare');
let abierto = false;
btnShare.addEventListener('click', () => {

    const boxShare = document.getElementById('boxShare');
    
    if(abierto === false) {
        boxShare.style.display = "block";
        btnShare.style.backgroundColor = "var(--DesaturatedDarkBlue)";
        btnShare.style.color = "black";
        abierto = true;
    } else {
        boxShare.style.display = "none";
        btnShare.style.backgroundColor = "var(--LightGrayishBlue)";
        abierto = false;
    }
});