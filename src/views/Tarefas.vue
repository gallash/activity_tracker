<template>
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <div v-if="semTarefas">
            Você não está muito produtivo hoje <span class="has-text-weight-bold">:(</span>
        </div>
        <Tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import type { TTarefa } from "@/types/TTarefa";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Tarefa,
  },
  data () {
    return {
      tarefas: [] as TTarefa[]
    }
  },
  methods: {
    salvarTarefa (tarefa:TTarefa) : void {
      this.tarefas.push(tarefa)
    }
  },
  computed: {
    semTarefas () :boolean {
      return this.tarefas.length == 0
    }
  }
});
</script>