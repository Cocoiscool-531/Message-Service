document.getElementById("selectAll").onclick = () => {
    const pass = document.getElementById("pass").select();
    const code = document.getElementById("code").select();

    if(validateCode(code.value) && validatePass(pass.value)){
        location.href += "thread?c=" + code.value + "&p=" + pass.value;
    }
};

function validateCode(code){
    if(code.value === ""){
        alert("Please enter a code");
        return false;
    }
    fetch('/api/validateCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({code: code.value}),
    })
}