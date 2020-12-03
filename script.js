function confirmacao() {
    if (confirm("Você tem certeza que deseja sair da página?")) {
        location.href = "imagens.html";
    }
}

function nome() {
    var nome = prompt("Digite seu nome:");
    alert("Obrigado " + nome + "!");
}

function cadastro() {
    var nomeCadastro = String(prompt("Digite seu nome:"));
    var idade = Number.parseInt(prompt("Digite sua idade:"));
    var praticaEsporte = Boolean(confirm("Você pratica esporte?"));
    console.info("Nome: " + nomeCadastro +
        "\nIdade: " + idade +
        "\nPratica Esportes?: " + (praticaEsporte ? "Sim" : "Não"));
}

function nomeCompleto() {
    var sobrenome = prompt("Digite seu sobrenome:");
    var nome2 = prompt("Digite seu nome:");
    alert("Obrigado " + nome2 + " " + sobrenome + "!");
}


function sobrenome() {
    var sobrenome2 = prompt("Digite seu sobrenome:").trim();
    alert("Olá, " + sobrenome2.toUpperCase() + ". Seu sobrenome contém " + sobrenome2.length + " letras.");
}

function calcularIdade() {
    var anoNascimento = Number.parseInt(prompt("Digite o seu ano de nascimento:"));
    var anoatual = Number.parseInt(prompt("Digite o ano atual:"));
    var idade2 = anoatual - anoNascimento;
    alert("Sua idade é " + idade2 + " ou " + (idade2 - 1));
}




window.onload = function () { dataInicial() };
function dataInicial() {

    if (document.getElementById("nascimento") != null) {
        //Inicializa o campo data com a data atual:
        document.getElementById("nascimento").value = new Date().dateToISO8601String().substring(0, 10);
        calcularIdade2();
    }

}

function calcularIdade2() {
    var dataNascimento = document.getElementById("nascimento").valueAsDate;
    var dataAtual = new Date(); //data atual
    //Transforma os valores para milisegundos e faz a diferença:
    var idadeMilisegundos = dataAtual.getTime() - dataNascimento.getTime();
    // Calculo para valor correspondente em dias. (1000ms * 60s * 60m * 24h).
    var idadeDias = idadeMilisegundos / (1000 * 60 * 60 * 24);
    var idade3 = Math.floor(idadeDias / 365);
    document.getElementById("saida").innerText = idade3;
}





function somar() {
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    document.getElementById("resultado").value = Number(operando1) + Number(operando2);
}
function subtrair() {
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    document.getElementById("resultado").value = Number(operando1) - Number(operando2);
    
}
function multiplicar() {
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    document.getElementById("resultado").value = Number(operando1) * Number(operando2);
    
}
function dividir() {
    var operando1 = document.getElementById("operando1").value;
    var operando2 = document.getElementById("operando2").value;
    document.getElementById("resultado").value = Number(operando1) / Number(operando2);
    
}

