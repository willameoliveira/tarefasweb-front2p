import {http} from './Api'

const API_NAME = 'tarefas/';

export default {
    
    listar:()=>{
        return http.get(API_NAME)
    },

    // caso a tarefa não possua id, adiciona uma nova. Em caso contrário, apenas altera a tarefa.
    salvar:(tarefa)=>{
        if (!tarefa.id) return http.post(API_NAME, tarefa) 
        else return http.put(API_NAME+tarefa.id, tarefa);
    },

    remover:(tarefa)=>{
        return http.delete(API_NAME+tarefa.id, tarefa);
    }
}