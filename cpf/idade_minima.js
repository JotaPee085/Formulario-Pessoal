//Campos a validar:
const nome = document.getElementById('nome');
const celular = document.getElementById('celular');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarsenha = document.getElementById('confirmarsenha');
const cpf = document.getElementById('cpf');
const dataNascimento = document.getElementById('dataNascimento');
const confirmaremail = document.getElementById('confirmaremail');
function validate(item)
item.setcustomvalidity('');
item.checkValidity();

if (item == confirmarsenha) {
    if (item.value === senha.value) item.setCustomvalidity('');
    else item.setCustomValidity('As senhas digitadas não são iguais. Verifique e corrija.');
}

if (item == dataNascimento){
    let hoje = new Date(); //obtém data atual
    let dnasc = new Date(dataNascimento.value);
    
    let idade = hoje.getFullYear() - dnasc.getFullYear();
    let m = hoje.getMonth() - dnasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dnasc.getDate())){
        idade--;
    }
    if (idade >= 0) document.getElementById('idade').value = idade + 'anos' ;
    else document. getElementById( 'idade' ).value = "Ainda não nascido";
}