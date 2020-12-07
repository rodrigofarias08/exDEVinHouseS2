var campoNovoItem = document.getElementById('nomeNovoItem');
var btAdicionar = document.getElementById('btAdicionarItem');
var btSalvar = document.getElementById('btSalvarLista');
var btCarregar = document.getElementById('btCarregarLista');
var listaItens = document.getElementById('listaItens');
var listaJS = []; //Lista de objetos JS para representar a lista de itens


var btCalcularPA = document.getElementById('btCalcularPA');
var btCalcularPG = document.getElementById('btCalcularPG');
var valorInicial = document.getElementById('valorInicial');
var raiz = document.getElementById('raiz');
var listaResultado = document.getElementById('listaResultado');
var resultado = [];



//onload = function () {
//    //Ao abrir a página é verificado se há uma lista de itens previamente salva
//    carregarLocalStorage();
//};

function verificaTexto() {
    if (campoNovoItem.value.trim()) { //Verifica se há algo a ser inserido
        insereItem(campoNovoItem.value.trim());
    }
    else {
        alert('Não foi identificado o nome do item.\nTente novamente.');
    }
}

function insereItem(nomeItem) {
    var itemJS = {
        id: listaJS.length, // o item recém criado sempre receberá o último da listaJS
        //concluido: false,
        descricao: nomeItem,
        //excluido: false // registro para identificar se o item foi excluído
    }
    //insere a nova tarefa no final da lista de objetos
    listaJS.push(itemJS);
    //atualizarLocalStorage(); //Atualiza o LocalStorage com a listaJS atualizada
    carregarNaTela(); //Renderiza de volta na tela a listaJS
}

function atualizarLocalStorage() {
    localStorage.setItem('listaItens', JSON.stringify(listaJS));
}

function carregarNaTela() {
    listaItens.innerHTML = ''; //remove a lista para renderizar novamente
    //rotina para renderizar os itens da lista de Tarefas:
    listaJS.forEach(element => {
        if (!element.excluido) {
            //Cada item é inserido na lista do usuário através da tag option:
            var itemLista = document.createElement('option');
            itemLista.id = element.id; // propriedade necessária para facilitar a manipulação
            itemLista.innerText = element.descricao;

            //insere o item no início da lista visível
            listaItens.prepend(itemLista);
        }
    });
}
function carregarDoLocalStorage() {
    if (localStorage.getItem('listaItens')) {
        listaJS = JSON.parse(localStorage.getItem('listaItens'));
        carregarNaTela()
    }
    else {
        alert('Não há itens salvos');
    }
}





function verificaValororesPA() {
    if ((valorInicial.value.length != '') & (raiz.value.trim() != '')) {
        calcularPA(valorInicial.value.trim(), raiz.value.trim());
    }
    else {
        alert('Valor inicia e Raiz Inválidos.\n Por gentileza digite novamente.');
    }
}

function verificaValororesPG() {
    if ((valorInicial.value.length != '') & (raiz.value.trim() != '')) {
        calcularPG(valorInicial.value.trim(), raiz.value.trim());
    }
    else {
        alert('Valor inicia e Raiz Inválidos.\n Por gentileza digite novamente.');
    }
}

function calcularPA(vi, raiz) {
    for (var i = 0; i < 10; i++) {
        resultado[i] = vi;
        vi = Number(vi) + Number(raiz);
    }
    publicarResultado();
}

function calcularPG(vi, raiz) {
    for (var i = 0; i < 10; i++) {
        resultado[i] = vi;
        vi = Number(vi) * Number(raiz);
    }
    publicarResultado();
}



function publicarResultado() {
    listaResultado.innerHTML = ''; //remove a lista para renderizar novamente
    resultado.forEach(element => {
        //Cada item é inserido na lista do usuário através da tag li:
        var itemLista = document.createElement('li');
        itemLista.innerText = element;
        console.log(itemLista);
        //insere o item no final da lista visível
        listaResultado.append(itemLista);
    });
}



if (btAdicionar) {
    btAdicionar.addEventListener('click', verificaTexto);
    campoNovoItem.addEventListener('keyup', (e) => {
        if (e.code === 'Enter') {
            verificaTexto();
        }
    });


    btSalvar.addEventListener('click', atualizarLocalStorage);
    btCarregar.addEventListener('click', carregarDoLocalStorage);
}

btCalcularPA.addEventListener('click', verificaValororesPA);
btCalcularPG.addEventListener('click', verificaValororesPG);


