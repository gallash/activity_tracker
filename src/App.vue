<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-claro': modoClaroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"  />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <div v-if="listaEstaVazia">A lista está vazia</div>
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import type { TTarefa } from './types/TTarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Tarefa
  },
  data (){
    return {
      tarefas: [] as TTarefa[],
      modoClaroAtivo: false
    }
  },
  computed: {
    listaEstaVazia() : boolean{
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: TTarefa){
      this.tarefas.push(tarefa);
    },
    trocarTema(modoClaroAtivo: boolean){
      this.modoClaroAtivo = modoClaroAtivo;
    }
  }
});
</script>

<style>
.lista{
  padding: 1.25rem;
}
main {
  --bg-primario: var(--bulma-body-background-color);
  --texto-primario: #ddd
}
main.modo-claro {
  --bg-primario: #fff;
  --texto-primario: #000;
}
.conteudo {
  background-color: var(--bg-primario);
  color: var(--texto-primario)
}
</style>
