



let listaDeTarefas = [];

//Adicionar tarefa
function adicionarTarefa(descricao) {
  const novaTarefa = {
    id: gerarId(),
    descricao: descricao,
  };

  listaDeTarefas.push(novaTarefa);
  console.log(`Tarefa adicionada: ${descricao}`);
}

//editar tarefa existente
function editarTarefa(id, novaDescricao) {
  const tarefa = encontrarTarefaPorId(id);

  if (tarefa) {
    tarefa.descricao = novaDescricao;
    console.log(`Tarefa editada (ID ${id}): ${novaDescricao}`);
  } else {
    console.log(`Tarefa não encontrada (ID ${id})`);
  }
}

//  remover uma tarefa
function removerTarefa(id) {
  const indice = encontrarIndicePorId(id);

  if (indice !== -1) {
    const tarefaRemovida = listaDeTarefas.splice(indice, 1);
    console.log(`Tarefa removida (ID ${id}): ${tarefaRemovida[0].descricao}`);
  } else {
    console.log(`Tarefa não encontrada (ID ${id})`);
  }
}

// listar todas as tarefas
function listarTarefas() {
  console.log("Lista de Tarefas:");
  listaDeTarefas.forEach((tarefa) => {
    console.log(`ID ${tarefa.id}: ${tarefa.descricao}`);
  });
}

//  obter uma tarefa  atraves de um id
function obterTarefaPorId(id) {
  const tarefa = encontrarTarefaPorId(id);

  if (tarefa) {
    console.log(`Tarefa encontrada (ID ${id}): ${tarefa.descricao}`);
  } else {
    console.log(`Tarefa não encontrada (ID ${id})`);
  }
}

// Função auxiliar para gerar IDs únicos
function gerarId() {
  return new Date().getTime();
}

// Função auxiliar para encontrar o índice de uma tarefa pelo ID
function encontrarIndicePorId(id) {
  return listaDeTarefas.findIndex((tarefa) => tarefa.id === id);
}

// Função auxiliar para encontrar uma tarefa pelo ID
function encontrarTarefaPorId(id) {
  return listaDeTarefas.find((tarefa) => tarefa.id === id);
}

// Exemplos de uso:
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer Exercicios");
listarTarefas();
editarTarefa(listaDeTarefas[0].id, "Estudar Phyton (atualizado)");
listarTarefas();
removerTarefa(listaDeTarefas[1].id);
listarTarefas();
obterTarefaPorId(listaDeTarefas[0].id);


