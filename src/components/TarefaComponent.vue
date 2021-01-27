<template>
    <div id="app">
        <nav>
            <div class="nav-wrapper blue darken-1">
                <a href="#" class="brand-logo center">Tarefas Web</a>
            </div>
        </nav>

        <form @submit.prevent="salvar">

          <label>Descrição</label>
          <input type="text" placeholder="Descrição" v-model="tarefa.descricao">
          
          <p>
            <label>
                <input type="checkbox" class="filled-in" v-model="tarefa.finalizada"/>
                <span>Finalizada</span>
            </label>
          </p>

          <p>
          <label>Data de finalização</label>
          <input type="date" v-model="tarefa.dataFinalizacao">
          </p>

          <p>
          <label>Imagem</label>
          <input type="text" v-model="tarefa.imagem">
          </p>

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

        </form>

        <table>

            <thead>

            <tr>
                <th>Descrição</th>
                <th>Finalizada</th>
                <th>Data de Finalização</th>
                <th>Imagem</th>
                <th>Opções</th>
            </tr>

            </thead>

            <tbody>

            <tr v-for="tarefa in tarefas" :key="tarefa.id">

                <td>{{tarefa.descricao}}</td>
                <td>{{tarefa.finalizada}}</td>
                <td>{{tarefa.dataFinalizacao}}</td>
                <td>{{tarefa.imagem}}</td>
                <td>
                <button @click="editar(tarefa)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                <button @click="remover(tarefa)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                </td>

            </tr>

            </tbody>
      
        </table>        
    </div>    
</template>

<script src="./TarefaComponent.js"></script>

<style>

</style>