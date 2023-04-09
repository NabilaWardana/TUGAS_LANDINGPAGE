for(let i=0;i<=8;i++){
    document.getElementById("container-card").innerHTML += `
        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aspernatur.</p>
        </div>
    `
}


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
        document.getElementById("warning").innerText="Periksa form Anda sekali lagi";
    }
}

function submitForm(){
    event.preventDefault(); // menghentikan pengiriman formulir
    submit(); // memvalidasi formulir
}

