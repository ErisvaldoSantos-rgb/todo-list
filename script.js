let tarefas = [];

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let tarefa = document.getElementById("tarefa").value;
    
    let status = document.getElementById("status").value;

    if (nome === "" || tarefa === "") {
        alert("Preencha os campos nome e tarefa");
        return;
    }

    let novaTarefa = {
        nome: nome,
        tarefa: tarefa,
        status: status 
    };

    tarefas.push(novaTarefa);
    
    
    document.getElementById("tarefa").value = "";
   

    listar();
}

function listar() {
    let lista = document.getElementById("lista");
    let filtro = document.getElementById("filtro").value;

    lista.innerHTML = "";
    
    for (let i = 0; i < tarefas.length; i++) {
        let t = tarefas[i];
        
        
        if (filtro === "todos" || t.status === filtro) {
            let item = document.createElement("li");
            item.innerHTML = `
                <strong>${t.tarefa}</strong> |
                Usuário: ${t.nome} |
                Status: <em>${t.status}</em>
                <button type="button" onclick="concluir(${i})">Concluir</button>
                <button type="button" onclick="excluir(${i})">Excluir</button>
            `;
            lista.appendChild(item);
        }
    }
}

function concluir(indice) {
    
    tarefas[indice].status = "concluido";
    listar();
}

function excluir(indice) {
    tarefas.splice(indice, 1);
    listar();
}
