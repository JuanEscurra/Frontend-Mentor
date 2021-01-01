const email = document.getElementById('email');
const formContact = document.getElementById('formContact');
let errorFormContact = document.getElementById('errorFormContact');

formContact.addEventListener('submit', e => {

    if(email.value === '' || email.value == null || email.value.indexOf("@")===-1) {
        e.preventDefault();
        errorFormContact.style.display = "block";
        formContact.style.border = "2px solid var(--SoftRed)";
        document.getElementById('icon-error').style.display = "inline";
        console.log(email.value.indexOf("@"));
    } else {
        errorFormContact.style.display = "none";
        document.getElementById('icon-error').style.display = "none";
        formContact.style.border = "1px solid var(--DesaturatedRed)";
    }
});