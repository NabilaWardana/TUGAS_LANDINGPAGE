// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData(){
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    return{
        name,
        city,
        email,
        zipCode,
        status
    }
}

function isNumber(zipCode){
    return isNaN(zipCode) ? false : true;
}

function checkboxIsChecked(){
    return document.getElementById("status").checked;
}

function validateFormData(obj){
    if(obj!==null && isNumber(obj.zipCode) && checkboxIsChecked()){
        return true;
    }
    return false;
}

function submit(){
    if(validateFormData(handleGetFormData())){
        document.getElementById("warning").innerText="";
    }else{
        document.getElementById("warning").innerText="Periksa form anda sekali lagi";
    }
}

function submitForm(){
    event.preventDefault(); // menghentikan pengiriman formulir
    submit(); // memvalidasi formulir
}