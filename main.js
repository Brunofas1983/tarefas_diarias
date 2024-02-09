let contador = 0

const input = document.getElementById('tarefa');
const botao = document.getElementById('btn-tarefa');
const main = document.getElementById('area-lista');
const dataDeHoje = document.getElementById('data');

//DATA
const data = new Date()

const dataFormada = Intl.DateTimeFormat("pt-br", {
    dateStyle: "long"
})

let dataFormatada = dataFormada.format(data);

dataDeHoje.innerHTML = dataFormatada;
////////////////////////////////////////////////////////////////


//FUNÇÃO ADD TAREFA
function addtarefa() {
    let tarefa = input.value;

    if((tarefa !== "") && (tarefa !== null) && (tarefa !== undefined)) {
        
        ++contador;

        let novaTarefa = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}"class="mdi mdi-circle-outline"></span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${tarefa}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="deletar"><span class="mdi mdi-trash-can"></span> Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novaTarefa;

    input.value = "";
    input.focus();

    
} else {
    alert("O Campo não pode estar vazio")
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNÇÃO DELETAR TAREFA
function deletar(id) {
    var tarefaDeletada = document.getElementById(id);
    tarefaDeletada.remove();
}
////////////////////////////////////////////////////////////////////////////////////////////////


//FUNÇÃO MARCAR TAREFA
function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add("clicado");

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////






