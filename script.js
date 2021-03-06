window.onload = function () {
    dataInicial();
    dispoeHorarioEntrada();
    verificaEstacao();
 };

 window.setInterval('dispoeHorarioAtual()', 1000);






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

function verificaParidade() {
    numero = Math.trunc(document.getElementById("numero").value);

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerText = "par";
    }
    else {
        document.getElementById("resultado").innerText = "impar";
    }
}



function dispoeHorarioEntrada() {
    if (document.getElementById("titulo").innerText == "Horário de Abertura da página") {
        var dataAtual = (new Date()).toString();

        document.getElementById("resultado").innerText = dataAtual.substring(16, 21);
    }
}

function dispoeHorarioAtual() {
    if (document.getElementById("titulo").innerText == "Horário de Abertura da página") {
        var dataAtual = (new Date()).toString();

        document.getElementById("horarioAtual").innerText = dataAtual.substring(16, 21);
    }
}



function verificaEstacao(){
    var mes = new Date().getMonth();
    var dia = new Date().getDay();
    var estacao = document.getElementById("resultado");
    var fotoEstacao = document.getElementById("imagemEstacao");

    //Podem ocorrer pequenos erros de datas limite das estações pois as datas variam dependendo do ano.
    if (mes == 12 | mes < 4) { //meses em que acontece o verão
        if (!(mes == 12 & dia < 21) & !(mes == 3 & dia > 19)){ // com excessão dos dias <21/12 e >19/3
            estacao.innerText = "Verão";
            fotoEstacao.src = "./imagens/verao.jpg"
        }
    }
    if (mes > 2 & mes < 7) { //meses em que acontece o outono
        if (!(mes == 3 & dia < 20) & !(mes == 6 & dia > 20)){ // com excessão dos dias <20/3 e >20/6
            estacao.innerText = "Outono";
            fotoEstacao.src = "./imagens/outono.jpg"
        }
    }
    if (mes > 5 & mes < 10) { //meses em que acontece o inverno
        if (!(mes == 6 & dia < 21) & !(mes == 9 & dia > 21)){ // com excessão dos dias <21/6 e >21/9
            estacao.innerText = "Inverno";
            fotoEstacao.src = "./imagens/inverno.jpg"
        }
    }
    if (mes > 8) { //meses em que acontece a primavera
        if (!(mes == 9 & dia < 22) & !(mes == 12 & dia > 20)){ // com excessão dos dias <22/9 e >20/12
            estacao.innerText = "Primavera";
            fotoEstacao.src = "./imagens/primavera.jpg"
        }
    }
}
