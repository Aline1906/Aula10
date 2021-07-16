const tarefasJson = require("../models/tarefas.json");
// const fs = require("fs");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson);
};

const getById = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    const novaTarefa = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)

    // fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err){
    //     if(err) {
    //         return response.status(424).send({message: err})
    //     }
    // })

    response.status(200).send(novaTarefa)

}

const deleteTask = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    // fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err){
    //     if(err) {
    //         return response.status(424).send({message: err})
    //     }
    // })

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])

}

const replaceTarefa = (req, res) =>{
    let requestedId = req.params.id;
    
    let tarefaFromBody = req.body;
    let filteredTarefa = postsJason.find(post=>post.id == requestedId);

    let updatedTarefa = {
        "id": filteredTarefa.id,
        "dataInclucao": filteredTarefa.dataInclusao,
        "concluido": tarefaFromBody.concluido,
        "descricao": tarefaFromBody.descricao,
        "nomeColaborador": tarefaFromBody.nomeColaborador
    }

    const indice = postsJason.indexOf(filteredTarefa);

    postsJason.splice(indice, 1, tarefaFromBody);
    res.status(200).send({
        "Message": "Tarefa substituida com sucesso",
        updatedTarefa
    })

}

const updateNome = (req, res)=>{


    let newName = req.body.newName;
    
    let filteredTarefa = postsJason.find(tarefa=>tarefa.nomeColaborador == newName);

    filteredTarefa.nome = newName;

    res.status(200).send({
        "Message": "Colaborador atualizado com sucesso",
        filteredTarefa
    });


}



module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replaceTarefa,
    updateNome
}