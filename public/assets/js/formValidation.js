const validateForm = () => {
    let firstname = document.forms[addEmployee][Firstname];
    let lastname = document.forms[addEmployee][Lastname];
    let departmnt = document.forms[addEmployee][department];
    let email = document.forms[addEmployee][mail];
    let passwrd = document.forms[addEmployee][password];
    let contact = document.forms[addEmployee][phonenumber];
    let gendr = document.forms[addEmployee][gender];

    if(firstname.value == ""){
        window.alert("Enter a valid name");
        firstname.focus();
        return false;
    }
    if(lastname.value == ""){
        window.alert("Enter a valid name");
        lastname.focus();
        return false;
    }
    if(departmnt == ""){
        window.alert("Enter a valid Department");
        departmnt.focus();
        return false;
    }
    if(email.value.indexOf(".", 0) < 0){
        window.alert("Enter a valid E-mail");
        email.focus();
        return false;
    }
    if(passwrd.value == ""){
        window.alert("Enter a pasword between 8 and 15 characters");
        passwrd.focus();
        return false;
    }
    if(contact == ""){
        window.alert("Enter valid Phonenumber, phone number should contains numbers only");
        contact.focus();
        return false;
    }
return true;

}