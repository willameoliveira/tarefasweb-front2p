<template>
  <div id="app">
    <!--img alt="Logo tarefas web: bloco de notas" src="./assets/logo-tarefasweb.png" /-->
    <TarefaComponent />
  </div>
</template>

<script>
import TarefaComponent from './components/TarefaComponent.vue'

export default {
  name: 'App',
  components: {
    TarefaComponent
  }
}
</script>

<style scoped>
img {
  display: block;
  margin: auto;
}
</style>
