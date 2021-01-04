let btnShare = document.getElementById('btnShare');
let abierto = false;
btnShare.addEventListener('click', () => {

    const boxShare = document.getElementById('boxShare');
    const iconPath = document.getElementById('iconShare');
    
    if(abierto === false) {
        boxShare.style.display = "block";
        btnShare.style.backgroundColor = "var(--DesaturatedDarkBlue)";
        iconPath.style.fill = "var(--LightGrayishBlue)";
        abierto = true;
    } else {
        boxShare.style.display = "none";
        btnShare.style.backgroundColor = "var(--LightGrayishBlue)";
        iconPath.style.fill = "var(--DesaturatedDarkBlue)";
        abierto = false;
    }
});