import TarefaService from '../services/TarefaService'

export default {
    name: 'app',
    data() {
        return {
            tarefa: {
                id: '',
                descricao: '',
                finalizada: '',
                dataFinalizacao: '',
                imagem: ''
            },
            tarefas: []
        }
    },

    mounted() {
        this.listar()
    },

    methods: {

        listar() {
            TarefaService.listar().then(resposta => {
                this.tarefas = resposta.data._embedded.tarefas
            }).catch(e => {
                console.log(e)
            })
        },

        salvar() {
            TarefaService.salvar(this.tarefa).then(() => {
                alert('Operação realizada com sucesso!')
                this.tarefa = {}
                this.listar()
            }).catch(e => {
                console.log(e)
            })
        },

        editar(tarefa) {
            this.tarefa = tarefa
        },

        remover(tarefa) {
            if (confirm('Deseja excluir a tarefa?')) {
                TarefaService.remover(tarefa).then(() => {
                    this.listar()
                }).catch(e => {
                    console.log(e)
                })
            }
        }
    }    
}